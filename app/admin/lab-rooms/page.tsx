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

// Define the LabRoom type here or import it from a shared file
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

  // Use fetch to get data from the API route
  const loadLabRooms = async () => {
    // NOTE: Add error handling and loading state for a production app
    const res = await fetch("/api/lab-rooms");
    const rooms = await res.json();
    setLabRooms(rooms);
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
        // Use fetch with the PATCH method to update a room
        await fetch(`/api/lab-rooms/${editingRoom.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomData),
        });
      } else {
        // Use fetch with the POST method to create a new room
        await fetch("/api/lab-rooms", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(roomData),
        });
      }
    } catch (error) {
      console.error("API call failed:", error);
      // Implement toast or alert for user feedback
    }

    resetForm();
    loadLabRooms(); // Reload the list after the action
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
    if (
      confirm(
        "Are you sure you want to delete this lab room? This action cannot be undone."
      )
    ) {
      try {
        // Use fetch with the DELETE method to deactivate a room
        await fetch(`/api/lab-rooms/${id}`, {
          method: "DELETE",
        });
        loadLabRooms(); // Reload the list after the action
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

  // --- START OF MODIFIED JSX ---
  return (
    // **MODIFICATION 1: Max-width Container & Padding**
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div className="space-y-10">
        {/* --- Header and Action Button --- */}
        <div className="flex justify-between items-center border-b pb-6">
          <div>
            {/* **MODIFICATION 2: Enhanced Header Typography & Color** */}
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight flex items-center">
              <Building2 className="h-9 w-9 mr-4 text-blue-600" />
              Lab Rooms
            </h1>
            <p className="text-xl text-gray-500 mt-2">
              Manage laboratory spaces and facilities inventory
            </p>
          </div>
          <Dialog
            open={isCreateDialogOpen}
            onOpenChange={setIsCreateDialogOpen}
          >
            <DialogTrigger asChild>
              <Button
                onClick={() => setEditingRoom(null)}
                // **MODIFICATION 3: Primary Blue Button Style**
                className="bg-blue-600 hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl text-lg px-6 py-3"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Lab Room
              </Button>
            </DialogTrigger>
            {/* **MODIFICATION 4: Dialog Styling** */}
            <DialogContent className="sm:max-w-[425px] md:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {editingRoom ? "Edit Lab Room" : "Create New Lab Room"}
                </DialogTitle>
                <DialogDescription>
                  {editingRoom
                    ? "Update the lab room details and capacity."
                    : "Add a new, essential lab room to the system inventory."}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-6">
                  {/* Grid layout for better form flow */}
                  <div className="grid gap-2">
                    <Label
                      htmlFor="name"
                      className="font-semibold text-gray-700"
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
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="capacity"
                      className="font-semibold text-gray-700"
                    >
                      Capacity (Max Students)
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
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="location"
                      className="font-semibold text-gray-700"
                    >
                      Location/Building
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g., Engineering Building, 1st Floor"
                      required
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label
                      htmlFor="equipment"
                      className="font-semibold text-gray-700"
                    >
                      Equipment (comma-separated)
                    </Label>
                    <Input
                      id="equipment"
                      value={formData.equipment}
                      onChange={(e) =>
                        setFormData({ ...formData, equipment: e.target.value })
                      }
                      placeholder="e.g., Microscopes, Workstations, Projector"
                      className="focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <DialogFooter className="mt-4 pt-4 border-t">
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    // **MODIFICATION 5: Consistent Blue Save Button**
                    className="bg-blue-600 hover:bg-blue-700 transition duration-150"
                  >
                    {editingRoom ? "Save Changes" : "Create Room"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        {/* --- Data Table Card --- */}
        {/* **MODIFICATION 6: Card and Table Styling** */}
        <Card className="shadow-2xl overflow-hidden rounded-xl">
          <CardHeader className="bg-white rounded-t-xl border-b p-6">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Room Inventory
            </CardTitle>
            <CardDescription className="text-gray-600 mt-1">
              {labRooms.length} active lab rooms are currently registered in the
              system.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {/* **MODIFICATION 7: Responsive Table Wrapper** */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-50">
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="min-w-[150px] font-bold text-gray-700 uppercase tracking-wider">
                      Name
                    </TableHead>
                    <TableHead className="min-w-[200px] font-bold text-gray-700 uppercase tracking-wider">
                      Location
                    </TableHead>
                    <TableHead className="text-center w-[120px] font-bold text-gray-700 uppercase tracking-wider">
                      Capacity
                    </TableHead>
                    <TableHead className="font-bold text-gray-700 uppercase tracking-wider">
                      Equipment
                    </TableHead>
                    <TableHead className="text-right w-[120px] font-bold text-gray-700 uppercase tracking-wider">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {labRooms.map((room) => (
                    <TableRow
                      key={room.id}
                      className="border-b hover:bg-blue-50/50 transition-colors duration-200"
                    >
                      <TableCell className="font-bold text-gray-900">
                        {room.name}
                      </TableCell>
                      <TableCell className="text-gray-600">
                        {room.location}
                      </TableCell>
                      <TableCell className="text-center font-extrabold text-blue-700">
                        {room.capacity}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {room.equipment.map((item, index) => (
                            <Badge
                              key={index}
                              variant="default" // Changed to default for better contrast
                              // **MODIFICATION 8: Enhanced Badge Style**
                              className="text-xs bg-blue-100 text-blue-800 font-medium hover:bg-blue-200 transition-colors px-2 py-1 rounded-full"
                            >
                              {item}
                            </Badge>
                          ))}
                          {room.equipment.length === 0 && (
                            <span className="text-gray-400 italic text-sm">
                              None listed
                            </span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          {/* **MODIFICATION 9: Action Button Focus/Hover States** */}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(room)}
                            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition-colors duration-150 rounded-full"
                            title="Edit Room"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(room.id)}
                            className="text-red-600 hover:bg-red-100 hover:text-red-800 transition-colors duration-150 rounded-full"
                            title="Delete Room"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {labRooms.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="text-center py-12 text-gray-500 italic text-lg"
                      >
                        No lab rooms found. Click **"Add Lab Room"** to get
                        started.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
