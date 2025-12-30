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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Plus, Edit, Trash2, Users, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
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

interface Group {
  id: string;
  name: string;
  sectionId: string;
  capacity: number;
  isActive: boolean;
}

interface Section {
  id: string;
  name: string;
  year: number;
  department: string;
  capacity: number;
  isActive: boolean;
  groups: Group[];
}

export default function SectionsPage() {
  const [sections, setSections] = useState<Section[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    capacity: "",
  });

  const [isGroupDialogOpen, setIsGroupDialogOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string>("");
  const [groupFormData, setGroupFormData] = useState({
    name: "",
    capacity: "",
  });

  useEffect(() => {
    loadSections();
  }, []);

  const loadSections = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/sections");
      const data = await res.json();
      setSections(data);
    } catch (err) {
      console.error("Failed to fetch sections:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sectionData = {
      name: formData.name,
      year: Number(formData.year),
      department: formData.department,
      capacity: Number(formData.capacity),
    };

    try {
      if (editingSection) {
        await fetch(`/api/sections/${editingSection.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionData),
        });
      } else {
        await fetch("/api/sections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sectionData),
        });
      }
      loadSections();
      resetForm();
    } catch (err) {
      console.error("Failed to save section:", err);
    }
  };

  const handleGroupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const groupData = {
      name: groupFormData.name,
      sectionId: selectedSectionId,
      capacity: Number(groupFormData.capacity),
    };

    try {
      await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(groupData),
      });
      loadSections();
      setIsGroupDialogOpen(false);
      setGroupFormData({ name: "", capacity: "" });
    } catch (err) {
      console.error("Failed to save group:", err);
    }
  };

  const handleEdit = (section: Section) => {
    setEditingSection(section);
    setFormData({
      name: section.name,
      year: section.year.toString(),
      department: section.department,
      capacity: section.capacity.toString(),
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete section and all associated groups?")) {
      try {
        await fetch(`/api/sections/${id}`, { method: "DELETE" });
        loadSections();
      } catch (err) {
        console.error("Failed to delete section:", err);
      }
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    if (confirm("Delete this student group?")) {
      try {
        await fetch(`/api/groups/${groupId}`, { method: "DELETE" });
        loadSections();
      } catch (err) {
        console.error("Failed to delete group:", err);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", year: "", department: "", capacity: "" });
    setEditingSection(null);
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
              <Users className="h-8 w-8 text-primary" />
            </div>
            Sections & Groups
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Divide academic years into sections and student groups.
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
                Add Section
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingSection ? "Edit Section" : "New Section"}
                </DialogTitle>
                <DialogDescription>
                  Define academic cohort and total capacity.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Section Name
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g., Section A"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Year Level
                    </Label>
                    <Select
                      value={formData.year}
                      onValueChange={(v) =>
                        setFormData({ ...formData, year: v })
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
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Max Capacity
                    </Label>
                    <Input
                      type="number"
                      min="1"
                      value={formData.capacity}
                      onChange={(e) =>
                        setFormData({ ...formData, capacity: e.target.value })
                      }
                      required
                    />
                  </div>
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
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingSection ? "Update Section" : "Create Section"}
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
                  Cohorts Inventory
                </CardTitle>
                <CardDescription className="font-medium">
                  {sections.length} active cohorts tracking.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {sections.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Section Name</TableHead>
                    <TableHead>Year</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead className="text-center">Capacity</TableHead>
                    <TableHead className="w-[40%]">Groups Division</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {sections.map((section) => (
                      <TableRow
                        key={section.id}
                        className="group transition-colors"
                      >
                        <TableCell className="font-black text-foreground">
                          {section.name}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={cn(
                              "font-bold px-2",
                              getYearColor(section.year)
                            )}
                          >
                            Year {section.year}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium text-muted-foreground">
                          {section.department}
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary font-bold">
                            {section.capacity}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap items-center gap-2">
                            {section.groups.map((group) => (
                              <Badge
                                key={group.id}
                                className="bg-primary/10 text-primary border-primary/20 font-bold group/badge"
                              >
                                {group.name} ({group.capacity})
                                <button
                                  onClick={() => handleDeleteGroup(group.id)}
                                  className="ml-1.5 opacity-0 group-hover:opacity-100 group-hover/badge:text-destructive transition-all"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => {
                                setSelectedSectionId(section.id);
                                setIsGroupDialogOpen(true);
                              }}
                              className="h-7 px-2 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/10 border border-dashed border-primary/30"
                            >
                              <Plus className="h-3 w-3 mr-1" /> Add Group
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(section)}
                              className="h-8 w-8 text-primary hover:bg-primary/10"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(section.id)}
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
          </CardContent>
        </Card>
      </motion.div>

      {/* Group Dialog */}
      <Dialog open={isGroupDialogOpen} onOpenChange={setIsGroupDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <LayoutGrid className="h-5 w-5 text-primary" /> Create Group
            </DialogTitle>
            <DialogDescription>
              Define a student division for this section.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleGroupSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Group Name
              </Label>
              <Input
                value={groupFormData.name}
                onChange={(e) =>
                  setGroupFormData({ ...groupFormData, name: e.target.value })
                }
                placeholder="e.g., Group 1"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Group Capacity
              </Label>
              <Input
                type="number"
                min="1"
                value={groupFormData.capacity}
                onChange={(e) =>
                  setGroupFormData({
                    ...groupFormData,
                    capacity: e.target.value,
                  })
                }
                placeholder="15"
                required
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full">
                Initialize Group
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
