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
  DialogFooter, // Added DialogFooter import for consistency
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
import { Plus, Edit, Trash2, Clock } from "lucide-react";

// Define the TimeSlot type here or import it from a shared types file
interface TimeSlot {
  id: string;
  dayOfWeek:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  startTime: string;
  endTime: string;
  slotType: "Lab" | "Lecture" | "Tutorial";
  createdAt: string;
  updatedAt: string;
}

const DAYS_OF_WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function TimeSlotsPage() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({
    dayOfWeek: "Monday" as
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday",
    startTime: "",
    endTime: "",
    slotType: "Lab" as "Lab" | "Lecture" | "Tutorial",
  });

  useEffect(() => {
    loadTimeSlots();
  }, []);

  // Use fetch to get data from the API route
  const loadTimeSlots = async () => {
    // NOTE: In a real app, you'd add loading/error state management
    const res = await fetch("/api/time-slots");
    const slotsData = await res.json();
    setTimeSlots(slotsData);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate time range
    if (formData.startTime >= formData.endTime) {
      alert("End time must be after start time");
      return;
    }

    try {
      if (editingTimeSlot) {
        // Use fetch with PATCH to update the time slot
        await fetch(`/api/time-slots/${editingTimeSlot.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        // Use fetch with POST to create a new time slot
        await fetch("/api/time-slots", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
    } catch (error) {
      console.error("API call failed:", error);
    }

    loadTimeSlots();
    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (timeSlot: TimeSlot) => {
    setEditingTimeSlot(timeSlot);
    setFormData({
      dayOfWeek: timeSlot.dayOfWeek,
      startTime: timeSlot.startTime,
      endTime: timeSlot.endTime,
      slotType: timeSlot.slotType,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this time slot? This action cannot be undone."
      )
    ) {
      try {
        // Use fetch with DELETE to delete the time slot
        await fetch(`/api/time-slots/${id}`, {
          method: "DELETE",
        });
        loadTimeSlots();
      } catch (error) {
        console.error("Delete failed:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      dayOfWeek: "Monday",
      startTime: "",
      endTime: "",
      slotType: "Lab",
    });
    setEditingTimeSlot(null);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      resetForm();
    }
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getSlotTypeColor = (slotType: string) => {
    switch (slotType) {
      case "Lab":
        return "bg-blue-100 text-blue-700 font-semibold border border-blue-200";
      case "Lecture":
        return "bg-green-100 text-green-700 font-semibold border border-green-200";
      case "Tutorial":
        return "bg-yellow-100 text-yellow-700 font-semibold border border-yellow-200";
      default:
        return "bg-gray-100 text-gray-700 font-semibold border border-gray-200";
    }
  };

  const getDayColor = (day: string) => {
    const colors = {
      Monday: "bg-red-100 text-red-700",
      Tuesday: "bg-orange-100 text-orange-700",
      Wednesday: "bg-yellow-100 text-yellow-700",
      Thursday: "bg-green-100 text-green-700",
      Friday: "bg-blue-100 text-blue-700",
      Saturday: "bg-purple-100 text-purple-700",
      Sunday: "bg-pink-100 text-pink-700",
    };
    // Use the theme color for the day badge
    return `${
      colors[day as keyof typeof colors] || "bg-gray-100 text-gray-700"
    } font-medium`;
  };

  // Sort time slots by day and time
  const sortedTimeSlots = [...timeSlots].sort((a, b) => {
    const dayOrder =
      DAYS_OF_WEEK.indexOf(a.dayOfWeek) - DAYS_OF_WEEK.indexOf(b.dayOfWeek);
    if (dayOrder !== 0) return dayOrder;
    return a.startTime.localeCompare(b.startTime);
  });

  return (
    <div className="space-y-8">
      {" "}
      {/* Consistent outside spacing */}
      {/* --- Header and Action Button --- */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            <Clock className="h-7 w-7 mr-3 text-blue-600" />{" "}
            {/* Consistent blue icon */}
            Time Slots
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Manage all available reusable time slots for scheduling
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700 transition duration-150 shadow-md">
              <Plus className="mr-2 h-5 w-5" />
              Add Time Slot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingTimeSlot ? "Edit Time Slot" : "Add New Time Slot"}
              </DialogTitle>
              <DialogDescription>
                {editingTimeSlot
                  ? "Update time slot details."
                  : "Create a new available time slot for labs, lectures, or tutorials."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dayOfWeek" className="font-semibold">
                    Day of Week
                  </Label>
                  <Select
                    value={formData.dayOfWeek}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, dayOfWeek: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Day" />
                    </SelectTrigger>
                    <SelectContent>
                      {DAYS_OF_WEEK.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slotType" className="font-semibold">
                    Slot Type
                  </Label>
                  <Select
                    value={formData.slotType}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, slotType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Lab">Lab Session</SelectItem>
                      <SelectItem value="Lecture">Lecture</SelectItem>
                      <SelectItem value="Tutorial">Tutorial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime" className="font-semibold">
                    Start Time
                  </Label>
                  <Input
                    id="startTime"
                    type="time"
                    value={formData.startTime}
                    onChange={(e) =>
                      setFormData({ ...formData, startTime: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="endTime" className="font-semibold">
                    End Time
                  </Label>
                  <Input
                    id="endTime"
                    type="time"
                    value={formData.endTime}
                    onChange={(e) =>
                      setFormData({ ...formData, endTime: e.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <DialogFooter className="pt-4 border-t">
                {" "}
                {/* Use DialogFooter for consistent button placement */}
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {editingTimeSlot ? "Update Slot" : "Create Slot"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* --- Data Table Card --- */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            Available Time Slots ({timeSlots.length})
          </CardTitle>
          <CardDescription className="text-gray-600">
            Ordered by day of the week and start time.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {timeSlots.length === 0 ? (
            <div className="text-center py-8 text-gray-500 italic">
              No time slots defined. Click "Add Time Slot" to create the first
              one.
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[120px] font-bold text-gray-700">
                    Day
                  </TableHead>
                  <TableHead className="w-[150px] font-bold text-gray-700">
                    Start Time
                  </TableHead>
                  <TableHead className="w-[150px] font-bold text-gray-700">
                    End Time
                  </TableHead>
                  <TableHead className="w-[100px] font-bold text-gray-700">
                    Duration
                  </TableHead>
                  <TableHead className="font-bold text-gray-700">
                    Type
                  </TableHead>
                  <TableHead className="text-right font-bold text-gray-700 w-[120px]">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTimeSlots.map((timeSlot) => {
                  const startHour = Number.parseInt(
                    timeSlot.startTime.split(":")[0]
                  );
                  const startMin = Number.parseInt(
                    timeSlot.startTime.split(":")[1]
                  );
                  const endHour = Number.parseInt(
                    timeSlot.endTime.split(":")[0]
                  );
                  const endMin = Number.parseInt(
                    timeSlot.endTime.split(":")[1]
                  );
                  const durationMin =
                    endHour * 60 + endMin - (startHour * 60 + startMin);
                  const durationHours = Math.floor(durationMin / 60);
                  const remainingMin = durationMin % 60;
                  const duration =
                    durationHours > 0
                      ? `${durationHours}h ${remainingMin}m`
                      : `${remainingMin}m`;

                  return (
                    <TableRow
                      key={timeSlot.id}
                      className="hover:bg-blue-50/50 transition-colors"
                    >
                      <TableCell>
                        <Badge className={getDayColor(timeSlot.dayOfWeek)}>
                          {timeSlot.dayOfWeek}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-semibold text-gray-800">
                        {formatTime(timeSlot.startTime)}
                      </TableCell>
                      <TableCell className="font-semibold text-gray-800">
                        {formatTime(timeSlot.endTime)}
                      </TableCell>
                      <TableCell className="text-gray-600 font-medium">
                        {duration}
                      </TableCell>
                      <TableCell>
                        <Badge className={getSlotTypeColor(timeSlot.slotType)}>
                          {timeSlot.slotType}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(timeSlot)}
                            className="text-blue-600 hover:bg-blue-100/70"
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(timeSlot.id)}
                            className="text-red-600 hover:bg-red-100/70"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
