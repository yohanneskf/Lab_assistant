"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Edit, Trash2, BookOpen, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
} from "recharts";

interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  year: number;
  section: string;
  batch: string;
  studentType: "regular" | "extension";
  isActive: boolean;
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    department: "",
    credits: 3,
    year: 1,
    section: "",
    batch: "",
    studentType: "regular" as "regular" | "extension",
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.error("Failed to load courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const yearData = useMemo(() => {
    const counts: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    courses.forEach((c) => {
      if (counts[c.year] !== undefined) counts[c.year]++;
    });
    return Object.entries(counts).map(([year, count]) => ({
      subject: `Year ${year}`,
      A: count,
      fullMark: Math.max(...Object.values(counts), 5),
    }));
  }, [courses]);

  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case 2:
        return "bg-blue-100 text-blue-700 border-blue-200";
      case 3:
        return "bg-amber-100 text-amber-700 border-amber-200";
      case 4:
        return "bg-orange-100 text-orange-700 border-orange-200";
      case 5:
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const columns: ColumnDef<Course>[] = [
    {
      accessorKey: "code",
      header: "Code & Name",
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-bold text-primary text-[10px] tracking-widest uppercase mb-0.5">
            {row.original.code}
          </span>
          <span className="font-bold text-foreground leading-tight">
            {row.original.name}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <span className="font-medium text-muted-foreground">
          {row.original.department}
        </span>
      ),
    },
    {
      accessorKey: "year",
      header: "Structure",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <Badge
            className={cn(
              "font-bold px-2 py-0",
              getYearColor(row.original.year)
            )}
          >
            Year {row.original.year}
          </Badge>
          <span className="text-xs font-black text-muted-foreground/70 uppercase tracking-tighter">
            Sec {row.original.section}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "studentType",
      header: "Type",
      cell: ({ row }) => (
        <Badge
          variant={
            row.original.studentType === "regular" ? "default" : "outline"
          }
          className="capitalize font-bold text-[10px]"
        >
          {row.original.studentType}
        </Badge>
      ),
    },
    {
      accessorKey: "credits",
      header: () => <div className="text-center">Credits</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary font-black">
            {row.original.credits}
          </span>
        </div>
      ),
    },
    {
      id: "actions",
      header: () => <div className="text-right">Actions</div>,
      cell: ({ row }) => (
        <div className="flex justify-end gap-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleEdit(row.original)}
            className="h-8 w-8 text-primary hover:bg-primary/10"
          >
            <Edit className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleDelete(row.original.id)}
            className="h-8 w-8 text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const courseData = { ...formData, isActive: true };

    try {
      if (editingCourse) {
        await fetch(`/api/courses/${editingCourse.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(courseData),
        });
      } else {
        await fetch("/api/courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(courseData),
        });
      }
      loadCourses();
      resetForm();
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const handleEdit = (course: Course) => {
    setEditingCourse(course);
    setFormData({
      code: course.code,
      name: course.name,
      department: course.department,
      credits: course.credits,
      year: course.year,
      section: course.section,
      batch: course.batch,
      studentType: course.studentType,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Permanently remove this course from the catalog?")) {
      try {
        await fetch(`/api/courses/${id}`, { method: "DELETE" });
        loadCourses();
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      department: "",
      credits: 3,
      year: 1,
      section: "",
      batch: "",
      studentType: "regular",
    });
    setEditingCourse(null);
    setIsDialogOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-2xl glass overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 pb-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black">
                  Course Catalog
                </CardTitle>
                <CardDescription className="font-medium">
                  {courses.length} active courses registered.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {courses.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-1">
            <DataTable
              columns={columns}
              data={courses}
              searchKey="name"
              searchPlaceholder="Filter by course name..."
              action={
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="font-bold shadow-sm shadow-primary/20 h-9 rounded-xl"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Course
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingCourse ? "Edit Course" : "Add New Course"}
                      </DialogTitle>
                      <DialogDescription>
                        Define course parameters and academic structure.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Course Code
                          </Label>
                          <Input
                            value={formData.code}
                            onChange={(e) =>
                              setFormData({ ...formData, code: e.target.value })
                            }
                            placeholder="e.g., CS101"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Credits
                          </Label>
                          <Input
                            type="number"
                            min="1"
                            max="6"
                            value={formData.credits}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                credits: parseInt(e.target.value),
                              })
                            }
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Course Name
                        </Label>
                        <Input
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g., Introduction to Computer Science"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          Department
                        </Label>
                        <Input
                          value={formData.department}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              department: e.target.value,
                            })
                          }
                          placeholder="e.g., Computer Science"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Year
                          </Label>
                          <Select
                            value={formData.year.toString()}
                            onValueChange={(v) =>
                              setFormData({ ...formData, year: parseInt(v) })
                            }
                          >
                            <SelectTrigger className="rounded-lg h-9">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {[1, 2, 3, 4, 5].map((y) => (
                                <SelectItem key={y} value={y.toString()}>
                                  {y}st Year
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Section
                          </Label>
                          <Input
                            value={formData.section}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                section: e.target.value,
                              })
                            }
                            placeholder="A"
                            className="h-9"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                            Batch
                          </Label>
                          <Input
                            value={formData.batch}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                batch: e.target.value,
                              })
                            }
                            placeholder="2024"
                            className="h-9"
                            required
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={resetForm}
                        >
                          Cancel
                        </Button>
                        <Button type="submit">
                          {editingCourse ? "Update Course" : "Create Course"}
                        </Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              }
            />
          </CardContent>
        </Card>

        <Card className="border-none shadow-2xl glass overflow-hidden h-fit">
          <CardHeader className="bg-muted/30 pb-6 border-b">
            <div className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-black">
                Academic Load
              </CardTitle>
            </div>
            <CardDescription className="font-medium">
              Course distribution by year
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={yearData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis
                    dataKey="subject"
                    tick={{
                      fontSize: 10,
                      fontWeight: "black",
                      fill: "hsl(var(--foreground))",
                    }}
                  />
                  <PolarRadiusAxis
                    angle={30}
                    domain={[0, "auto"]}
                    tick={false}
                    axisLine={false}
                  />
                  <Radar
                    name="Courses"
                    dataKey="A"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.4}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {yearData.map((data, index) => (
                <div
                  key={data.subject}
                  className="flex flex-col p-3 rounded-xl bg-muted/30 border border-border/50"
                >
                  <span className="text-[10px] font-black text-muted-foreground uppercase tracking-wider">
                    {data.subject}
                  </span>
                  <span className="text-xl font-black text-foreground">
                    {data.A}{" "}
                    <span className="text-xs font-medium text-muted-foreground">
                      Courses
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
