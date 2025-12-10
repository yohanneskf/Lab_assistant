"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, BookOpen } from "lucide-react";

// Define the Course type here or import it from a shared types file
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

  // Use fetch to get data from the API route
  const loadCourses = async () => {
    // NOTE: Add error handling and loading state for a production app
    const res = await fetch("/api/courses");
    const coursesData = await res.json();
    setCourses(coursesData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const courseData = {
      ...formData,
      isActive: true,
    };

    try {
      if (editingCourse) {
        // Use fetch with PATCH to update the course
        const res = await fetch(`/api/courses/${editingCourse.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(courseData),
        });
        if (!res.ok) throw new Error("Update failed");
      } else {
        // Use fetch with POST to create a new course
        const res = await fetch("/api/courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(courseData),
        });
        if (!res.ok) throw new Error("Creation failed");
      }
    } catch (error) {
      console.error("API call failed:", error);
      // Implement user-facing error message here
    }

    loadCourses();
    setIsDialogOpen(false);
    resetForm();
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
    if (
      confirm(
        "Are you sure you want to delete this course? This action cannot be undone."
      )
    ) {
      try {
        // Use fetch with DELETE to deactivate the course
        const res = await fetch(`/api/courses/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Deletion failed");
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
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return "bg-green-100 text-green-700 font-semibold border border-green-200";
      case 2:
        return "bg-blue-100 text-blue-700 font-semibold border border-blue-200";
      case 3:
        return "bg-yellow-100 text-yellow-700 font-semibold border border-yellow-200";
      case 4:
        return "bg-orange-100 text-orange-700 font-semibold border border-orange-200";
      case 5:
        return "bg-purple-100 text-purple-700 font-semibold border border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 font-semibold border border-gray-200";
    }
  };

  return (
    <div className="space-y-8">
      {" "}
      {/* Increased outer spacing */}
      {/* --- Header and Action Button --- */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            <BookOpen className="h-7 w-7 mr-3 text-green-600" />
            Courses
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Manage course catalog with academic structure details
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700 transition duration-150 shadow-md">
              <Plus className="mr-2 h-5 w-5" />
              Add Course
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingCourse ? "Edit Course" : "Add New Course"}
              </DialogTitle>
              <DialogDescription>
                {editingCourse
                  ? "Update course information and academic structure."
                  : "Create a new course with academic details for scheduling."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              {" "}
              {/* Increased form spacing */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="code" className="font-semibold">
                    Course Code
                  </Label>
                  <Input
                    id="code"
                    value={formData.code}
                    onChange={(e) =>
                      setFormData({ ...formData, code: e.target.value })
                    }
                    placeholder="e.g., CS101"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="credits" className="font-semibold">
                    Credits
                  </Label>
                  <Input
                    id="credits"
                    type="number"
                    min="1"
                    max="6"
                    value={formData.credits}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        credits: Number.parseInt(e.target.value),
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold">
                  Course Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Introduction to Computer Science"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="font-semibold">
                  Department
                </Label>
                <Input
                  id="department"
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  placeholder="e.g., Computer Science"
                  required
                />
              </div>
              {/* Academic Structure Group */}
              <div className="grid grid-cols-3 gap-4 border p-4 rounded-lg bg-gray-50">
                <h4 className="col-span-3 text-sm font-bold text-gray-700 uppercase mb-2">
                  Academic Structure
                </h4>
                <div className="space-y-2">
                  <Label htmlFor="year">Year Level</Label>
                  <Select
                    value={formData.year.toString()}
                    onValueChange={(value) =>
                      setFormData({ ...formData, year: Number.parseInt(value) })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1st Year</SelectItem>
                      <SelectItem value="2">2nd Year</SelectItem>
                      <SelectItem value="3">3rd Year</SelectItem>
                      <SelectItem value="4">4th Year</SelectItem>
                      <SelectItem value="5">5th Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="section">Section</Label>
                  <Input
                    id="section"
                    value={formData.section}
                    onChange={(e) =>
                      setFormData({ ...formData, section: e.target.value })
                    }
                    placeholder="e.g., A, B, C"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="batch">Batch (Year)</Label>
                  <Input
                    id="batch"
                    value={formData.batch}
                    onChange={(e) =>
                      setFormData({ ...formData, batch: e.target.value })
                    }
                    placeholder="e.g., 2024"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentType" className="font-semibold">
                  Student Type
                </Label>
                <Select
                  value={formData.studentType}
                  onValueChange={(value: "regular" | "extension") =>
                    setFormData({ ...formData, studentType: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Regular</SelectItem>
                    <SelectItem value="extension">Extension</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                >
                  {editingCourse ? "Update Course" : "Create Course"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* --- Data Table Card --- */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            Course Catalog ({courses.length})
          </CardTitle>
          <CardDescription className="text-gray-600">
            All courses with academic structure details
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {courses.length === 0 ? (
            <div className="text-center py-8 text-gray-500 italic">
              No courses found. Click "Add Course" to get started.
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Code
                  </TableHead>
                  <TableHead className="w-[300px] font-bold text-gray-700">
                    Name
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Department
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Year & Section
                  </TableHead>
                  <TableHead className="w-[80px] font-bold text-gray-700">
                    Batch
                  </TableHead>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Type
                  </TableHead>
                  <TableHead className="w-[80px] font-bold text-gray-700">
                    Credits
                  </TableHead>
                  <TableHead className="text-right font-bold text-gray-700 w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow
                    key={course.id}
                    className="hover:bg-green-50/50 transition-colors"
                  >
                    <TableCell className="font-semibold text-green-700">
                      {course.code}
                    </TableCell>
                    <TableCell className="text-gray-800 font-medium">
                      {course.name}
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {course.department}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge className={getYearColor(course.year)}>
                          Year {course.year}
                        </Badge>
                        <span className="text-sm text-gray-600">
                          Sec {course.section}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-gray-700">
                      {course.batch}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          course.studentType === "regular"
                            ? "default"
                            : "outline"
                        }
                        className={
                          course.studentType === "regular"
                            ? "bg-purple-600 hover:bg-purple-700 text-white"
                            : "border-purple-300 text-purple-600"
                        }
                      >
                        {course.studentType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className="bg-gray-200 text-gray-700 font-semibold"
                      >
                        {course.credits} Cr
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(course)}
                          className="text-blue-600 hover:bg-blue-100/70"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(course.id)}
                          className="text-red-600 hover:bg-red-100/70"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
