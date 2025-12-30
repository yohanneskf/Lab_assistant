"use client";
import { useEffect, useState } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, BookOpen } from "lucide-react";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

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
  createdAt: string;
  updatedAt: string;
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
    if (confirm("Are you sure you want to delete this course?")) {
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

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            Courses
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Manage course catalog and academic structure.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="font-bold shadow-lg shadow-primary/20"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Course
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
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
                      setFormData({ ...formData, department: e.target.value })
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
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
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
                        setFormData({ ...formData, section: e.target.value })
                      }
                      placeholder="A"
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
                        setFormData({ ...formData, batch: e.target.value })
                      }
                      placeholder="2024"
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingCourse ? "Update Course" : "Create Course"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <Card className="border-none shadow-2xl glass overflow-hidden">
          <CardHeader className="bg-muted/30 pb-6">
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
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Code & Name</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Structure</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-center">Credits</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {courses.map((course) => (
                      <TableRow
                        key={course.id}
                        className="group transition-colors"
                      >
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-bold text-primary text-xs tracking-wider uppercase">
                              {course.code}
                            </span>
                            <span className="font-bold text-foreground">
                              {course.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-medium text-muted-foreground">
                          {course.department}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Badge className={getYearColor(course.year)}>
                              Year {course.year}
                            </Badge>
                            <span className="text-sm font-bold text-muted-foreground">
                              Sec {course.section}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              course.studentType === "regular"
                                ? "default"
                                : "outline"
                            }
                            className="capitalize"
                          >
                            {course.studentType}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary font-bold">
                            {course.credits}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(course)}
                              className="h-8 w-8 text-primary hover:bg-primary/10"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(course.id)}
                              className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
            {courses.length === 0 && !isLoading && (
              <div className="p-12 text-center text-muted-foreground whitespace-pre-line">
                No courses found.{"\n"}Click "Add Course" to get started.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
