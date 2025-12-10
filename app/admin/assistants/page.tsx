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
  DialogFooter, // Added DialogFooter for consistent button placement
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
import { Plus, Edit, Trash2, Users, Key, Eye, EyeOff } from "lucide-react";

// Define the LabAssistant type
interface LabAssistant {
  id: string;
  labAssistantId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  department: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function AssistantsPage() {
  const [assistants, setAssistants] = useState<LabAssistant[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [editingAssistant, setEditingAssistant] = useState<LabAssistant | null>(
    null
  );
  const [selectedAssistant, setSelectedAssistant] =
    useState<LabAssistant | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    labAssistantId: "",
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    department: "",
  });
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    loadLabAssistants();
  }, []);

  const loadLabAssistants = async () => {
    try {
      const res = await fetch("/api/lab-assistants");
      const assistantsData = await res.json();
      setAssistants(assistantsData);
    } catch (error) {
      console.error("Failed to load lab assistants:", error);
    }
  };

  const generateLabAssistantId = () => {
    const year = new Date().getFullYear();
    // Filter out potential nulls/undefineds before map
    const existingIds = assistants
      .map((a) => a.labAssistantId)
      .filter((id) => id && id.startsWith(`LA${year}`));

    // Find the max number and increment it, or start at 1
    let nextNumber = 1;
    if (existingIds.length > 0) {
      const maxNum = existingIds.reduce((max, id) => {
        const numPart = parseInt(id.slice(-3));
        // Safely parse the number part of the ID
        if (id.length >= 3) {
          const numPart = parseInt(id.slice(-3));
          return numPart > max ? numPart : max;
        }
        return max;
      }, 0);
      nextNumber = maxNum + 1;
    }

    return `LA${year}${nextNumber.toString().padStart(3, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isCreating = !editingAssistant;

    if (isCreating && !formData.password) {
      alert("Password is required for new lab assistants.");
      return;
    }

    const assistantData = {
      ...formData,
      labAssistantId: formData.labAssistantId || generateLabAssistantId(),
      ...(formData.password && { password: formData.password }),
      isActive: true,
    };

    try {
      if (editingAssistant) {
        // Update assistant by making a PATCH request
        await fetch(`/api/lab-assistants/${editingAssistant.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(assistantData),
        });
      } else {
        // Create assistant by making a POST request
        await fetch("/api/lab-assistants", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(assistantData),
        });
      }

      loadLabAssistants();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("Failed to save assistant:", error);
      // In a real app, display an error notification
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (selectedAssistant) {
      try {
        // Update the password by making a PATCH request
        await fetch(`/api/lab-assistants/${selectedAssistant.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            password: passwordData.newPassword,
          }),
        });

        loadLabAssistants();
        setIsPasswordDialogOpen(false);
        setPasswordData({ newPassword: "", confirmPassword: "" });
        setSelectedAssistant(null);
      } catch (error) {
        console.error("Failed to change password:", error);
      }
    }
  };

  const handleEdit = (assistant: LabAssistant) => {
    setEditingAssistant(assistant);
    setFormData({
      labAssistantId: assistant.labAssistantId,
      username: assistant.username,
      firstName: assistant.firstName,
      lastName: assistant.lastName,
      email: assistant.email,
      password: "",
      department: assistant.department,
    });
    setIsDialogOpen(true);
  };

  const handleChangePassword = (assistant: LabAssistant) => {
    setSelectedAssistant(assistant);
    setIsPasswordDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this lab assistant? This will also delete their user account (if implemented)."
      )
    ) {
      try {
        await fetch(`/api/lab-assistants/${id}`, {
          method: "DELETE",
        });
        loadLabAssistants();
      } catch (error) {
        console.error("Failed to delete assistant:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      labAssistantId: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      department: "",
    });
    setEditingAssistant(null);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    } else if (!editingAssistant) {
      setFormData((prev) => ({
        ...prev,
        labAssistantId: generateLabAssistantId(),
      }));
    }
  };

  const handlePasswordDialogChange = (open: boolean) => {
    setIsPasswordDialogOpen(open);
    if (!open) {
      setPasswordData({ newPassword: "", confirmPassword: "" });
      setSelectedAssistant(null);
    }
  };

  // Custom Badge color for consistency
  const getStatusColor = (isActive: boolean) => {
    return isActive
      ? "bg-green-100 text-green-700 font-semibold border border-green-200"
      : "bg-red-100 text-red-700 font-semibold border border-red-200";
  };

  return (
    <div className="space-y-8">
      {/* --- Header and Action Button --- */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            <Users className="h-7 w-7 mr-3 text-blue-600" />
            Lab Assistants
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Manage lab assistant accounts, details, and login credentials
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 transition duration-150 shadow-md">
              <Plus className="mr-2 h-5 w-5" />
              Add Assistant
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[550px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingAssistant
                  ? "Edit Lab Assistant"
                  : "Add New Lab Assistant"}
              </DialogTitle>
              <DialogDescription>
                {editingAssistant
                  ? "Update assistant information. Leave password field blank to keep current password."
                  : "Register a new lab assistant and set up initial credentials."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="labAssistantId" className="font-semibold">
                    Lab Assistant ID
                  </Label>
                  <Input
                    id="labAssistantId"
                    value={formData.labAssistantId}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        labAssistantId: e.target.value,
                      })
                    }
                    placeholder="LA2024001"
                    required
                    disabled={!!editingAssistant}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username" className="font-semibold">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                    placeholder="john_doe"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-semibold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-semibold">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john.doe@lab.edu"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="font-semibold">
                  {editingAssistant ? "New Password (Optional)" : "Password"}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder={
                      editingAssistant
                        ? "Leave blank to keep existing password"
                        : "Enter initial login password"
                    }
                    required={!editingAssistant}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-8 text-gray-500 hover:text-blue-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </Button>
                </div>
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
                  placeholder="Computer Science"
                  required
                />
              </div>
              <DialogFooter className="pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {editingAssistant ? "Update Assistant" : "Create Assistant"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* --- Password Change Dialog --- */}
      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={handlePasswordDialogChange}
      >
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              <Key className="inline-block h-6 w-6 mr-2 text-blue-600" />
              Change Password
            </DialogTitle>
            <DialogDescription>
              Set a new secure password for **{selectedAssistant?.firstName}{" "}
              {selectedAssistant?.lastName}** (
              {selectedAssistant?.labAssistantId})
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-5 pt-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword" className="font-semibold">
                New Password
              </Label>
              <Input
                id="newPassword"
                type="password"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
                placeholder="Enter new password (min 6 chars)"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="font-semibold">
                Confirm Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
                placeholder="Confirm new password"
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsPasswordDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Update Password
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* --- Data Table Card --- */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            Active Lab Assistants ({assistants.filter((a) => a.isActive).length}
            )
          </CardTitle>
          <CardDescription className="text-gray-600">
            All registered lab assistants, their department, and access status.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {assistants.filter((a) => a.isActive).length === 0 ? (
            <div className="text-center py-8 text-gray-500 italic">
              No active lab assistants found. Click "Add Assistant" to register
              the first one.
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[150px] font-bold text-gray-700">
                    ID
                  </TableHead>
                  <TableHead className="w-[200px] font-bold text-gray-700">
                    Name
                  </TableHead>
                  <TableHead className="w-[120px] font-bold text-gray-700">
                    Username
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Email
                  </TableHead>
                  <TableHead className="w-[150px] font-bold text-gray-700">
                    Department
                  </TableHead>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Status
                  </TableHead>
                  <TableHead className="text-right w-[150px] font-bold text-gray-700">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assistants
                  .filter((a) => a.isActive)
                  .map((assistant) => (
                    <TableRow
                      key={assistant.id}
                      className="hover:bg-blue-50/50 transition-colors"
                    >
                      <TableCell className="font-semibold text-blue-700">
                        {assistant.labAssistantId}
                      </TableCell>
                      <TableCell className="font-medium text-gray-800">
                        {assistant.firstName} {assistant.lastName}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {assistant.username}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {assistant.email}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {assistant.department}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(assistant.isActive)}>
                          {assistant.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(assistant)}
                            className="text-blue-600 hover:bg-blue-100/70"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleChangePassword(assistant)}
                            className="text-orange-600 hover:bg-orange-100/70"
                          >
                            <Key className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(assistant.id)}
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
