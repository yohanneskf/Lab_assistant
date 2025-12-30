"use client";

import React, { useState, useEffect, useMemo } from "react";
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
import {
  Plus,
  Edit,
  Trash2,
  Clock,
  CalendarDays,
  AreaChart,
} from "lucide-react";
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

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#ec4899",
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

  const distributionData = useMemo(() => {
    const counts: Record<string, number> = {};
    DAYS_OF_WEEK.forEach((day) => (counts[day] = 0));
    timeSlots.forEach((slot) => {
      counts[slot.dayOfWeek]++;
    });
    return DAYS_OF_WEEK.map((day) => ({
      name: day.substring(0, 3),
      count: counts[day],
    }));
  }, [timeSlots]);

  const columns: ColumnDef<TimeSlot>[] = [
    {
      accessorKey: "dayOfWeek",
      header: "Day",
      cell: ({ row }) => (
        <Badge
          className={cn(
            "font-bold px-3 py-1",
            getDayColor(row.original.dayOfWeek)
          )}
        >
          <CalendarDays className="mr-1.5 h-3 w-3 inline" />
          {row.original.dayOfWeek}
        </Badge>
      ),
    },
    {
      accessorKey: "startTime",
      header: "Timing",
      cell: ({ row }) => (
        <span className="font-black text-foreground">
          {formatTime(row.original.startTime)} -{" "}
          {formatTime(row.original.endTime)}
        </span>
      ),
    },
    {
      id: "duration",
      header: "Duration",
      cell: ({ row }) => {
        const [sh, sm] = row.original.startTime.split(":").map(Number);
        const [eh, em] = row.original.endTime.split(":").map(Number);
        const totalMin = eh * 60 + em - (sh * 60 + sm);
        const h = Math.floor(totalMin / 60);
        const m = totalMin % 60;
        return (
          <span className="font-medium text-muted-foreground whitespace-nowrap">
            {h > 0 ? `${h}h ` : ""}
            {m > 0 ? `${m}m` : ""}
          </span>
        );
      },
    },
    {
      accessorKey: "slotType",
      header: "Category",
      cell: ({ row }) => (
        <Badge
          className={cn("font-bold", getSlotTypeColor(row.original.slotType))}
        >
          {row.original.slotType}
        </Badge>
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
    if (!time) return "";
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-10"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <div>
          <h1 className="text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            Time Slots
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Define reusable schedule blocks for the academic week.
          </p>
        </div>

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
              className="font-bold shadow-lg shadow-primary/20 h-12 rounded-xl"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Time Slot
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md rounded-2xl">
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
                    <SelectTrigger className="rounded-lg h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
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
                    <SelectTrigger className="rounded-lg h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
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
                    className="h-10 rounded-lg"
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
                    className="h-10 rounded-lg"
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 border-none shadow-2xl glass overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 pb-6 border-b">
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
          <CardContent className="p-6 flex-1">
            <DataTable
              columns={columns}
              data={timeSlots}
              searchKey="dayOfWeek"
              searchPlaceholder="Filter by day..."
            />
          </CardContent>
        </Card>

        <Card className="border-none shadow-2xl glass overflow-hidden h-fit">
          <CardHeader className="bg-muted/30 pb-6 border-b">
            <div className="flex items-center gap-2">
              <AreaChart className="h-5 w-5 text-primary" />
              <CardTitle className="text-xl font-black">
                Operational Density
              </CardTitle>
            </div>
            <CardDescription className="font-medium">
              Slot frequency across the week
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[250px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData} barGap={0}>
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
                  <YAxis hide />
                  <RechartsTooltip
                    cursor={{ fill: "transparent" }}
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "12px",
                      border: "1px solid hsl(var(--border))",
                      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    }}
                  />
                  <Bar dataKey="count" radius={[4, 4, 0, 0]} barSize={20}>
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-primary/5 border border-primary/10">
                <span className="text-sm font-medium text-foreground">
                  Total Operational Slots
                </span>
                <span className="text-lg font-black text-primary">
                  {timeSlots.length}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground text-center font-medium leading-relaxed italic">
                Strategic distribution of time blocks ensures optimal resource
                utilization and prevents scheduling conflicts.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
