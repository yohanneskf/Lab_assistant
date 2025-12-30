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
  Plus,
  Edit,
  Trash2,
  Users,
  Key,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

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
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(true);
    try {
      const res = await fetch("/api/lab-assistants");
      const data = await res.json();
      setAssistants(data);
    } catch (error) {
      console.error("Failed to load lab assistants:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateLabAssistantId = () => {
    const year = new Date().getFullYear();
    const existingIds = assistants
      .map((a) => a.labAssistantId)
      .filter((id) => id && id.startsWith(`LA${year}`));

    let nextNumber = 1;
    if (existingIds.length > 0) {
      const maxNum = existingIds.reduce((max, id) => {
        const numPart = parseInt(id.slice(-3));
        return numPart > max ? numPart : max;
      }, 0);
      nextNumber = maxNum + 1;
    }

    return `LA${year}${nextNumber.toString().padStart(3, "0")}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isCreating = !editingAssistant;

    const assistantData = {
      ...formData,
      labAssistantId: formData.labAssistantId || generateLabAssistantId(),
      ...(formData.password && { password: formData.password }),
      isActive: true,
    };

    try {
      if (editingAssistant) {
        await fetch(`/api/lab-assistants/${editingAssistant.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(assistantData),
        });
      } else {
        await fetch("/api/lab-assistants", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(assistantData),
        });
      }
      loadLabAssistants();
      resetForm();
    } catch (error) {
      console.error("Failed to save assistant:", error);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) return;

    if (selectedAssistant) {
      try {
        await fetch(`/api/lab-assistants/${selectedAssistant.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password: passwordData.newPassword }),
        });
        setIsPasswordDialogOpen(false);
        setPasswordData({ newPassword: "", confirmPassword: "" });
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

  const handleDelete = async (id: string) => {
    if (confirm("Permanently delete this assistant account?")) {
      try {
        await fetch(`/api/lab-assistants/${id}`, { method: "DELETE" });
        loadLabAssistants();
      } catch (error) {
        console.error("Delete failed:", error);
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
    setIsDialogOpen(false);
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
            Lab Assistants
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Manage assistant credentials and department assignments.
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
                Add Assistant
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>
                  {editingAssistant ? "Edit Assistant" : "Register Assistant"}
                </DialogTitle>
                <DialogDescription>
                  Configure personal details and access permissions.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Internal ID
                    </Label>
                    <Input value={formData.labAssistantId} disabled />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Username
                    </Label>
                    <Input
                      value={formData.username}
                      onChange={(e) =>
                        setFormData({ ...formData, username: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      First Name
                    </Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Last Name
                    </Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                {!editingAssistant && (
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Secure Password
                    </Label>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
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
                )}
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Department
                  </Label>
                  <Input
                    value={formData.department}
                    onChange={(e) =>
                      setFormData({ ...formData, department: e.target.value })
                    }
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingAssistant ? "Update Profile" : "Create Account"}
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
                  Staff Registry
                </CardTitle>
                <CardDescription className="font-medium">
                  {assistants.length} accounts managed.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {assistants.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Assistant</TableHead>
                    <TableHead>Account Info</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {assistants.map((assistant) => (
                      <TableRow
                        key={assistant.id}
                        className="group transition-colors"
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary border border-primary/20">
                              {assistant.firstName[0]}
                              {assistant.lastName[0]}
                            </div>
                            <div className="flex flex-col">
                              <span className="font-black text-foreground">
                                {assistant.firstName} {assistant.lastName}
                              </span>
                              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                                {assistant.labAssistantId}
                              </span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-bold text-muted-foreground">
                              @{assistant.username}
                            </span>
                            <span className="text-xs text-muted-foreground/70">
                              {assistant.email}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="font-bold">
                            {assistant.department}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                "h-2 w-2 rounded-full",
                                assistant.isActive
                                  ? "bg-emerald-500 animate-pulse"
                                  : "bg-slate-300"
                              )}
                            />
                            <span className="text-xs font-black uppercase tracking-wider">
                              {assistant.isActive ? "Online" : "Offline"}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(assistant)}
                              className="h-8 w-8 text-primary hover:bg-primary/10"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => {
                                setSelectedAssistant(assistant);
                                setIsPasswordDialogOpen(true);
                              }}
                              className="h-8 w-8 text-amber-500 hover:bg-amber-100/50"
                            >
                              <Key className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(assistant.id)}
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

      {/* Password Dialog */}
      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
      >
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-500" /> Reset Password
            </DialogTitle>
            <DialogDescription>
              Resetting access for {selectedAssistant?.firstName}.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordSubmit} className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                New Password
              </Label>
              <Input
                type="password"
                value={passwordData.newPassword}
                onChange={(v) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: v.target.value,
                  })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Confirm
              </Label>
              <Input
                type="password"
                value={passwordData.confirmPassword}
                onChange={(v) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: v.target.value,
                  })
                }
                required
              />
            </div>
            <DialogFooter>
              <Button
                type="submit"
                disabled={
                  passwordData.newPassword !== passwordData.confirmPassword ||
                  !passwordData.newPassword
                }
                className="w-full bg-amber-500 hover:bg-amber-600"
              >
                Update Credentials
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}
