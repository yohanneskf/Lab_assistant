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
import { Plus, Edit, Trash2, Building2, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  equipment: string[];
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

export default function LabRoomsPage() {
  const [labRooms, setLabRooms] = useState<LabRoom[]>([]);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingRoom, setEditingRoom] = useState<LabRoom | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    capacity: "",
    location: "",
    equipment: "",
  });

  useEffect(() => {
    loadLabRooms();
  }, []);

  const loadLabRooms = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/lab-rooms");
      const rooms = await res.json();
      setLabRooms(rooms);
    } catch (error) {
      console.error("Failed to load rooms:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const chartData = useMemo(() => {
    return labRooms.map((room) => ({
      name: room.name,
      capacity: room.capacity,
    }));
  }, [labRooms]);

  const columns: ColumnDef<LabRoom>[] = [
    {
      accessorKey: "name",
      header: "Room Name",
      cell: ({ row }) => (
        <span className="font-bold text-foreground">{row.original.name}</span>
      ),
    },
    {
      accessorKey: "location",
      header: "Location",
      cell: ({ row }) => (
        <span className="font-medium text-muted-foreground">
          {row.original.location}
        </span>
      ),
    },
    {
      accessorKey: "capacity",
      header: () => <div className="text-center">Capacity</div>,
      cell: ({ row }) => (
        <div className="text-center">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-black">
            {row.original.capacity}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "equipment",
      header: "Equipment",
      cell: ({ row }) => (
        <div className="flex flex-wrap gap-1.5 max-w-[300px]">
          {row.original.equipment.map((item, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-2 py-0.5 rounded-md font-bold text-[10px] uppercase"
            >
              {item}
            </Badge>
          ))}
          {row.original.equipment.length === 0 && (
            <span className="text-xs text-muted-foreground italic">
              No equipment recorded
            </span>
          )}
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
    const roomData = {
      name: formData.name,
      capacity: Number(formData.capacity),
      location: formData.location,
      equipment: formData.equipment
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      if (editingRoom) {
        await fetch(`/api/lab-rooms/${editingRoom.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomData),
        });
      } else {
        await fetch("/api/lab-rooms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomData),
        });
      }
      resetForm();
      loadLabRooms();
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  const handleEdit = (room: LabRoom) => {
    setEditingRoom(room);
    setFormData({
      name: room.name,
      capacity: room.capacity.toString(),
      location: room.location,
      equipment: room.equipment.join(", "),
    });
    setIsCreateDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Permanently remove this lab room from inventory?")) {
      try {
        await fetch(`/api/lab-rooms/${id}`, { method: "DELETE" });
        loadLabRooms();
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", capacity: "", location: "", equipment: "" });
    setEditingRoom(null);
    setIsCreateDialogOpen(false);
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
                  Room Inventory
                </CardTitle>
                <CardDescription className="font-medium">
                  {labRooms.length} active spaces registered.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {labRooms.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-1">
            <DataTable
              columns={columns}
              data={labRooms}
              searchKey="name"
              searchPlaceholder="Search rooms..."
              action={
                <Dialog
                  open={isCreateDialogOpen}
                  onOpenChange={setIsCreateDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button
                      onClick={() => setEditingRoom(null)}
                      size="sm"
                      className="font-bold shadow-sm shadow-primary/20 h-9 rounded-xl"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingRoom ? "Edit Lab Room" : "Create New Lab Room"}
                      </DialogTitle>
                      <DialogDescription>
                        Enter the details for the laboratory space.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="name"
                            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                          >
                            Room Name
                          </Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g., L-101 (Physics Lab)"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label
                              htmlFor="capacity"
                              className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                            >
                              Capacity
                            </Label>
                            <Input
                              id="capacity"
                              type="number"
                              min="1"
                              value={formData.capacity}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  capacity: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="location"
                              className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                            >
                              Building
                            </Label>
                            <Input
                              id="location"
                              value={formData.location}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  location: e.target.value,
                                })
                              }
                              required
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="equipment"
                            className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
                          >
                            Equipment (comma-sep)
                          </Label>
                          <Input
                            id="equipment"
                            value={formData.equipment}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                equipment: e.target.value,
                              })
                            }
                            placeholder="Microscopes, Projector..."
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
                          {editingRoom ? "Save Changes" : "Create Room"}
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
              <BarChart3 className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-black">
                Capacity Allocation
              </CardTitle>
            </div>
            <CardDescription className="font-medium">
              Seating capacity per laboratory
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartData}
                  layout="vertical"
                  margin={{ left: 20 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal={false}
                    stroke="hsl(var(--border))"
                  />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 10,
                      fontWeight: "bold",
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    width={80}
                  />
                  <RechartsTooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="capacity" radius={[0, 4, 4, 0]} barSize={24}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
