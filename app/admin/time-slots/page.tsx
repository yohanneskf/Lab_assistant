"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Clock, CalendarDays } from "lucide-react";
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
  const [isLoading, setIsLoading] = useState(true);
  const [editingTimeSlot, setEditingTimeSlot] = useState<TimeSlot | null>(null);
  const [formData, setFormData] = useState({
    dayOfWeek: "Monday" as TimeSlot["dayOfWeek"],
    startTime: "",
    endTime: "",
    slotType: "Lab" as "Lab" | "Lecture" | "Tutorial",
  });

  useEffect(() => {
    loadTimeSlots();
  }, []);

  const loadTimeSlots = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/time-slots");
      const slotsData = await res.json();
      setTimeSlots(slotsData);
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.startTime >= formData.endTime) {
      alert("End time must be after start time");
      return;
    }

    try {
      if (editingTimeSlot) {
        await fetch(`/api/time-slots/${editingTimeSlot.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch("/api/time-slots", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      loadTimeSlots();
      setIsDialogOpen(false);
      resetForm();
    } catch (error) {
      console.error("API call failed:", error);
    }
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
    if (confirm("Delete this time slot?")) {
      try {
        await fetch(`/api/time-slots/${id}`, { method: "DELETE" });
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

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    return `${hour % 12 || 12}:${minutes} ${ampm}`;
  };

  const getSlotTypeColor = (slotType: string) => {
    switch (slotType) {
      case "Lab":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Lecture":
        return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "Tutorial":
        return "bg-amber-100 text-amber-700 border-amber-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getDayColor = (day: string) => {
    const colors = {
      Monday: "bg-rose-100 text-rose-700 border-rose-200",
      Tuesday: "bg-orange-100 text-orange-700 border-orange-200",
      Wednesday: "bg-amber-100 text-amber-700 border-amber-200",
      Thursday: "bg-emerald-100 text-emerald-700 border-emerald-200",
      Friday: "bg-sky-100 text-sky-700 border-sky-200",
      Saturday: "bg-indigo-100 text-indigo-700 border-indigo-200",
      Sunday: "bg-pink-100 text-pink-700 border-pink-200",
    };
    return colors[day as keyof typeof colors] || "bg-slate-100 text-slate-700";
  };

  const sortedTimeSlots = [...timeSlots].sort((a, b) => {
    const dayOrder =
      DAYS_OF_WEEK.indexOf(a.dayOfWeek) - DAYS_OF_WEEK.indexOf(b.dayOfWeek);
    return dayOrder !== 0 ? dayOrder : a.startTime.localeCompare(b.startTime);
  });

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
              <Clock className="h-8 w-8 text-primary" />
            </div>
            Time Slots
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Define reusable schedule blocks for the academic week.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Dialog
            open={isDialogOpen}
            onOpenChange={(open) => {
              setIsDialogOpen(open);
              if (!open) resetForm();
            }}
          >
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="font-bold shadow-lg shadow-primary/20"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Time Slot
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>
                  {editingTimeSlot ? "Edit Slot" : "New Slot"}
                </DialogTitle>
                <DialogDescription>
                  Create a modular time block for resource allocation.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-5 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Day of Week
                    </Label>
                    <Select
                      value={formData.dayOfWeek}
                      onValueChange={(v: any) =>
                        setFormData({ ...formData, dayOfWeek: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
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
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Slot Type
                    </Label>
                    <Select
                      value={formData.slotType}
                      onValueChange={(v: any) =>
                        setFormData({ ...formData, slotType: v })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue />
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
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Start Time
                    </Label>
                    <Input
                      type="time"
                      value={formData.startTime}
                      onChange={(e) =>
                        setFormData({ ...formData, startTime: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      End Time
                    </Label>
                    <Input
                      type="time"
                      value={formData.endTime}
                      onChange={(e) =>
                        setFormData({ ...formData, endTime: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">
                    {editingTimeSlot ? "Update Slot" : "Create Slot"}
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
                  Schedule Registry
                </CardTitle>
                <CardDescription className="font-medium">
                  {timeSlots.length} defined operational slots.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {timeSlots.length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Day</TableHead>
                    <TableHead>Timing</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <AnimatePresence mode="popLayout">
                    {sortedTimeSlots.map((timeSlot) => {
                      const [sh, sm] = timeSlot.startTime
                        .split(":")
                        .map(Number);
                      const [eh, em] = timeSlot.endTime.split(":").map(Number);
                      const totalMin = eh * 60 + em - (sh * 60 + sm);
                      const h = Math.floor(totalMin / 60);
                      const m = totalMin % 60;

                      return (
                        <TableRow
                          key={timeSlot.id}
                          className="group transition-colors"
                        >
                          <TableCell>
                            <Badge
                              className={cn(
                                "font-bold px-3 py-1",
                                getDayColor(timeSlot.dayOfWeek)
                              )}
                            >
                              <CalendarDays className="mr-1.5 h-3 w-3 inline" />
                              {timeSlot.dayOfWeek}
                            </Badge>
                          </TableCell>
                          <TableCell className="font-black text-foreground">
                            {formatTime(timeSlot.startTime)} -{" "}
                            {formatTime(timeSlot.endTime)}
                          </TableCell>
                          <TableCell className="font-medium text-muted-foreground">
                            {h > 0 ? `${h}h ` : ""}
                            {m > 0 ? `${m}m` : ""}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={cn(
                                "font-bold",
                                getSlotTypeColor(timeSlot.slotType)
                              )}
                            >
                              {timeSlot.slotType}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(timeSlot)}
                                className="h-8 w-8 text-primary hover:bg-primary/10"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(timeSlot.id)}
                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </AnimatePresence>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
