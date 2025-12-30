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
import { Plus, Edit, Trash2, Building2 } from "lucide-react";

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

// Define the LabRoom type
interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  equipment: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

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
    if (confirm("Are you sure you want to delete this lab room?")) {
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            Lab Rooms
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Manage laboratory spaces and facilities inventory.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                onClick={() => setEditingRoom(null)}
                size="lg"
                className="font-bold shadow-lg shadow-primary/20"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Room
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
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
                          setFormData({ ...formData, capacity: e.target.value })
                        }
                        placeholder="30"
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
                          setFormData({ ...formData, location: e.target.value })
                        }
                        placeholder="Main Building"
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
                        setFormData({ ...formData, equipment: e.target.value })
                      }
                      placeholder="Microscopes, Projector..."
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="button" variant="ghost" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingRoom ? "Save Changes" : "Create Room"}
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
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead className="text-center">Capacity</TableHead>
                    <TableHead>Equipment</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {labRooms.map((room) => (
                      <TableRow
                        key={room.id}
                        className="group transition-colors"
                      >
                        <TableCell className="font-bold text-foreground">
                          {room.name}
                        </TableCell>
                        <TableCell className="font-medium text-muted-foreground">
                          {room.location}
                        </TableCell>
                        <TableCell className="text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary font-bold">
                            {room.capacity}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1.5">
                            {room.equipment.map((item, index) => (
                              <Badge
                                key={index}
                                variant="secondary"
                                className="px-2 py-0.5 rounded-md font-medium"
                              >
                                {item}
                              </Badge>
                            ))}
                            {room.equipment.length === 0 && (
                              <span className="text-xs text-muted-foreground italic">
                                No equipment
                              </span>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(room)}
                              className="h-8 w-8 text-primary hover:bg-primary/10"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(room.id)}
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
            {labRooms.length === 0 && !isLoading && (
              <div className="p-12 text-center text-muted-foreground">
                No lab rooms found. Start by adding one.
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
