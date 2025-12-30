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
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import {
  Plus,
  Edit,
  Trash2,
  Users,
  Key,
  Eye,
  EyeOff,
  ShieldCheck,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend,
} from "recharts";

interface LabAssistant {
  id: string;
  labAssistantId: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  isActive: boolean;
}

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
];

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

  const departmentData = useMemo(() => {
    const counts: Record<string, number> = {};
    assistants.forEach((a) => {
      counts[a.department] = (counts[a.department] || 0) + 1;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [assistants]);

  const columns: ColumnDef<LabAssistant>[] = [
    {
      accessorKey: "labAssistantId",
      header: "Assistant",
      cell: ({ row }) => {
        const assistant = row.original;
        return (
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
        );
      },
    },
    {
      accessorKey: "username",
      header: "Account Info",
      cell: ({ row }) => (
        <div className="flex flex-col">
          <span className="font-bold text-muted-foreground">
            @{row.original.username}
          </span>
          <span className="text-xs text-muted-foreground/70">
            {row.original.email}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "department",
      header: "Department",
      cell: ({ row }) => (
        <Badge variant="secondary" className="font-bold">
          {row.original.department}
        </Badge>
      ),
    },
    {
      accessorKey: "isActive",
      header: "Status",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              row.original.isActive
                ? "bg-emerald-500 animate-pulse"
                : "bg-slate-300"
            )}
          />
          <span className="text-xs font-black uppercase tracking-wider">
            {row.original.isActive ? "Online" : "Offline"}
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
            onClick={() => {
              setSelectedAssistant(row.original);
              setIsPasswordDialogOpen(true);
            }}
            className="h-8 w-8 text-amber-500 hover:bg-amber-100/50"
          >
            <Key className="h-4 w-4" />
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
          <CardContent className="p-6 flex-1">
            <DataTable
              columns={columns}
              data={assistants}
              searchKey="username"
              searchPlaceholder="Filter by username..."
              action={
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="font-bold shadow-sm shadow-primary/20 h-9 rounded-xl"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Assistant
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[550px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingAssistant
                          ? "Edit Assistant"
                          : "Register Assistant"}
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
                          <Input
                            value={formData.labAssistantId}
                            disabled
                            className="bg-muted"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Username
                          </Label>
                          <Input
                            value={formData.username}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                username: e.target.value,
                              })
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
                              setFormData({
                                ...formData,
                                firstName: e.target.value,
                              })
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
                              setFormData({
                                ...formData,
                                lastName: e.target.value,
                              })
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
                                setFormData({
                                  ...formData,
                                  password: e.target.value,
                                })
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
                            setFormData({
                              ...formData,
                              department: e.target.value,
                            })
                          }
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
                          {editingAssistant
                            ? "Update Profile"
                            : "Create Account"}
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
            <CardTitle className="text-xl font-black">
              Department Distribution
            </CardTitle>
            <CardDescription className="font-medium">
              Staff allocation by area
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 space-y-4">
              {departmentData.map((dept, index) => (
                <div
                  key={dept.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm font-bold uppercase tracking-wider">
                      {dept.name}
                    </span>
                  </div>
                  <span className="font-black text-primary">{dept.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
      >
        <DialogContent className="sm:max-w-[400px] rounded-2xl">
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
                className="w-full bg-amber-500 hover:bg-amber-600 h-11 rounded-xl font-bold"
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
