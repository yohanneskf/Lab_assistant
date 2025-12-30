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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Plus, Edit, Trash2, Users, LayoutGrid, PieChart } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

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

  const chartData = useMemo(() => {
    return sections.map((s) => {
      const groupTotal = s.groups.reduce((acc, g) => acc + g.capacity, 0);
      return {
        name: s.name,
        Section: s.capacity,
        Groups: groupTotal,
      };
    });
  }, [sections]);

  const columns: ColumnDef<Section>[] = [
    {
      accessorKey: "name",
      header: "Section Name",
      cell: ({ row }) => (
        <span className="font-black text-foreground">{row.original.name}</span>
      ),
    },
    {
      accessorKey: "year",
      header: "Year",
      cell: ({ row }) => (
        <Badge
          className={cn("font-bold px-2", getYearColor(row.original.year))}
        >
          Year {row.original.year}
        </Badge>
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
      accessorKey: "capacity",
      header: () => <div className="text-center">Capacity</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/5 text-primary font-black">
            {row.original.capacity}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "groups",
      header: "Groups Division",
      cell: ({ row }) => (
        <div className="flex flex-wrap items-center gap-1.5 min-w-[200px]">
          {row.original.groups.map((group) => (
            <Badge
              key={group.id}
              className="bg-primary/5 text-primary border-primary/10 font-bold group/badge h-7 flex items-center"
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
              setSelectedSectionId(row.original.id);
              setIsGroupDialogOpen(true);
            }}
            className="h-7 px-2 text-[10px] font-black uppercase tracking-widest text-primary hover:bg-primary/10 border border-dashed border-primary/30"
          >
            <Plus className="h-3 w-3 mr-1" /> Add Group
          </Button>
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
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="h-auto lg:h-[calc(100vh-8.5rem)] flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-full min-h-0">
        <Card className="lg:col-span-2 border-none shadow-2xl glass lg:overflow-hidden flex flex-col h-fit lg:h-full">
          <CardHeader className="bg-muted/30 pb-6 border-b shrink-0">
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
          <CardContent className="p-0 flex-1 lg:overflow-y-auto">
            <div className="p-6">
              <DataTable
                columns={columns}
                data={sections}
                searchKey="name"
                searchPlaceholder="Filter by section..."
                action={
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        className="font-bold shadow-sm shadow-primary/20 h-9 rounded-xl"
                      >
                        <Plus className="mr-2 h-4 w-4" />
                        Add Section
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md rounded-2xl">
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
                              <SelectTrigger className="rounded-lg h-10">
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
                            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              Max Capacity
                            </Label>
                            <Input
                              type="number"
                              min="1"
                              value={formData.capacity}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  capacity: e.target.value,
                                })
                              }
                              className="h-10 rounded-lg"
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
                              setFormData({
                                ...formData,
                                department: e.target.value,
                              })
                            }
                            placeholder="e.g., Computer Science"
                            required
                          />
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
                            {editingSection
                              ? "Update Section"
                              : "Create Section"}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                }
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-2xl glass lg:overflow-hidden h-fit lg:h-full flex flex-col">
          <CardHeader className="bg-muted/30 pb-6 border-b shrink-0">
            <div className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-black">
                Capacity Allocation
              </CardTitle>
            </div>
            <CardDescription className="font-medium">
              Section vs Sub-group Capacity
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 flex-1 lg:overflow-y-auto">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fontWeight: "bold",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fontWeight: "bold",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                  />
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Legend iconType="circle" />
                  <Bar
                    dataKey="Section"
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                  <Bar
                    dataKey="Groups"
                    fill="hsl(var(--muted-foreground))"
                    radius={[4, 4, 0, 0]}
                    barSize={20}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={isGroupDialogOpen} onOpenChange={setIsGroupDialogOpen}>
        <DialogContent className="sm:max-w-sm rounded-2xl">
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
                className="h-10 rounded-lg"
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
                className="h-10 rounded-lg"
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full h-10 rounded-xl font-bold"
              >
                Initialize Group
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
