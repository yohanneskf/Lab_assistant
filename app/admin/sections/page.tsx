"use client";

import { useEffect, useState } from "react";
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
  DialogFooter, // Ensure DialogFooter is imported for button placement
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
import { Plus, Edit, Trash2, Users } from "lucide-react"; // Added Users icon for the main header

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
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    department: "",
    capacity: "",
  });

  // Group state
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
    try {
      const res = await fetch("/api/sections");
      const data = await res.json();
      setSections(data);
    } catch (err) {
      console.error("Failed to fetch sections:", err);
    }
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingSection(null);
      setFormData({ name: "", year: "", department: "", capacity: "" });
    }
  };

  const handleGroupDialogChange = (open: boolean) => {
    setIsGroupDialogOpen(open);
    if (!open) {
      setSelectedSectionId("");
      setGroupFormData({ name: "", capacity: "" });
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
      handleDialogChange(false);
    } catch (err) {
      console.error("Failed to save section:", err);
      // Add user feedback (e.g., toast)
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
      handleGroupDialogChange(false);
    } catch (err) {
      console.error("Failed to save group:", err);
      // Add user feedback (e.g., toast)
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
    if (
      confirm(
        "Are you sure you want to delete this section? This will also remove associated groups."
      )
    ) {
      try {
        await fetch(`/api/sections/${id}`, { method: "DELETE" });
        loadSections();
      } catch (err) {
        console.error("Failed to delete section:", err);
      }
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    if (confirm("Are you sure you want to delete this group?")) {
      try {
        await fetch(`/api/groups/${groupId}`, { method: "DELETE" });
        loadSections();
      } catch (err) {
        console.error("Failed to delete group:", err);
      }
    }
  };

  const openGroupDialog = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setIsGroupDialogOpen(true);
  };

  const getYearColor = (year: number) => {
    switch (year) {
      case 1:
        return "bg-green-100 text-green-700 border border-green-200";
      case 2:
        return "bg-blue-100 text-blue-700 border border-blue-200";
      case 3:
        return "bg-yellow-100 text-yellow-700 border border-yellow-200";
      case 4:
        return "bg-orange-100 text-orange-700 border border-orange-200";
      case 5:
        return "bg-purple-100 text-purple-700 border border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-200";
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
            <Users className="h-7 w-7 mr-3 text-blue-600" />{" "}
            {/* Consistent blue icon */}
            Sections & Groups
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Manage academic sections and their groups for capacity planning
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 transition duration-150 shadow-md">
              <Plus className="mr-2 h-5 w-5" />
              Add Section
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingSection ? "Edit Section" : "Add New Section"}
              </DialogTitle>
              <DialogDescription>
                {editingSection
                  ? "Update section information and capacity."
                  : "Create a new academic section and define its parameters."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div>
                <Label htmlFor="name" className="font-semibold">
                  Section Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g., Section A"
                  required
                />
              </div>
              <div>
                <Label htmlFor="year" className="font-semibold">
                  Year Level
                </Label>
                <Select
                  value={formData.year}
                  onValueChange={(value) =>
                    setFormData({ ...formData, year: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select year" />
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
              <div>
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
              <div>
                <Label htmlFor="capacity" className="font-semibold">
                  Total Capacity (Students)
                </Label>
                <Input
                  id="capacity"
                  type="number"
                  min="1"
                  value={formData.capacity}
                  onChange={(e) =>
                    setFormData({ ...formData, capacity: e.target.value })
                  }
                  placeholder="e.g., 30"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
                {editingSection ? "Update Section" : "Create Section"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* --- Data Table Card --- */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Section Inventory ({sections.length})
          </CardTitle>
          <CardDescription className="text-gray-600">
            Academic sections and their associated groups for division.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {sections.length === 0 ? (
            <div className="text-center py-8 text-gray-500 italic">
              No sections found. Click "Add Section" to create the first one.
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[150px] font-bold text-gray-700">
                    Section Name
                  </TableHead>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Year
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Department
                  </TableHead>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Capacity
                  </TableHead>
                  <TableHead className="w-[40%] font-bold text-gray-700">
                    Groups
                  </TableHead>
                  <TableHead className="text-right w-[120px] font-bold text-gray-700">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sections.map((section) => (
                  <TableRow
                    key={section.id}
                    className="hover:bg-blue-50/50 transition-colors"
                  >
                    <TableCell className="font-semibold text-gray-800">
                      {section.name}
                    </TableCell>
                    <TableCell>
                      <Badge className={getYearColor(section.year)}>
                        {section.year} Year
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">
                      {section.department}
                    </TableCell>
                    <TableCell className="font-medium text-center text-blue-700">
                      {section.capacity}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap items-center gap-2">
                        {section.groups.map((group) => (
                          <Badge
                            key={group.id}
                            className="text-xs bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
                          >
                            {group.name} ({group.capacity})
                            <button
                              onClick={() => handleDeleteGroup(group.id)}
                              className="ml-2 text-white/80 hover:text-white transition-colors"
                            >
                              <Trash2 className="h-3 w-3 inline-block" />
                            </button>
                          </Badge>
                        ))}
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openGroupDialog(section.id)}
                          className="h-6 px-2 text-xs text-blue-600 hover:bg-blue-100/70 border border-dashed border-blue-300"
                        >
                          <Plus className="h-3 w-3 mr-1" /> Add Group
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end space-x-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleEdit(section)}
                          className="text-blue-600 hover:bg-blue-100/70"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => handleDelete(section.id)}
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
      {/* Group Dialog */}
      <Dialog open={isGroupDialogOpen} onOpenChange={handleGroupDialogChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Add New Group
            </DialogTitle>
            <DialogDescription>
              Create a new student division group for the selected section.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleGroupSubmit} className="space-y-5 pt-4">
            <div>
              <Label htmlFor="groupName" className="font-semibold">
                Group Name
              </Label>
              <Input
                id="groupName"
                value={groupFormData.name}
                onChange={(e) =>
                  setGroupFormData({ ...groupFormData, name: e.target.value })
                }
                placeholder="e.g., Group 1"
                required
              />
            </div>
            <div>
              <Label htmlFor="groupCapacity" className="font-semibold">
                Group Capacity (Students)
              </Label>
              <Input
                id="groupCapacity"
                type="number"
                min="1"
                value={groupFormData.capacity}
                onChange={(e) =>
                  setGroupFormData({
                    ...groupFormData,
                    capacity: e.target.value,
                  })
                }
                placeholder="e.g., 15"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Create Group
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
