"use client";

import type React from "react";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
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
  Calendar,
  AlertCircle,
  BarChart3,
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

interface ScheduleAssignment {
  id: string;
  courseId: string;
  sectionId: string;
  groupId: string | null;
  labRoomId: string;
  labAssistantId: string;
  timeSlotId: string;
  status: "active" | "inactive";
}

interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  isActive: boolean;
}

interface LabAssistant {
  id: string;
  labAssistantId: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}

interface TimeSlot {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  isActive: boolean;
}

interface Course {
  id: string;
  code: string;
  name: string;
  isActive: boolean;
}

interface Section {
  id: string;
  name: string;
  isActive: boolean;
}

interface Group {
  id: string;
  name: string;
  sectionId: string;
  isActive: boolean;
}

const COLORS = [
  "#3b82f6",
  "#10b981",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#ec4899",
];

export default function SchedulesPage() {
  const [schedules, setSchedules] = useState<ScheduleAssignment[]>([]);
  const [labRooms, setLabRooms] = useState<LabRoom[]>([]);
  const [assistants, setAssistants] = useState<LabAssistant[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingSchedule, setEditingSchedule] =
    useState<ScheduleAssignment | null>(null);
  const [formData, setFormData] = useState({
    courseId: "",
    sectionId: "",
    groupId: "",
    labRoomId: "",
    labAssistantId: "",
    timeSlotId: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [
        schedulesRes,
        labRoomsRes,
        assistantsRes,
        timeSlotsRes,
        coursesRes,
        sectionsRes,
        groupsRes,
      ] = await Promise.all([
        fetch("/api/schedules"),
        fetch("/api/lab-rooms"),
        fetch("/api/lab-assistants"),
        fetch("/api/time-slots"),
        fetch("/api/courses"),
        fetch("/api/sections"),
        fetch("/api/groups"),
      ]);

      const [
        schedulesData,
        labRoomsData,
        assistantsData,
        timeSlotsData,
        coursesData,
        sectionsData,
        groupsData,
      ] = await Promise.all([
        schedulesRes.json(),
        labRoomsRes.json(),
        assistantsRes.json(),
        timeSlotsRes.json(),
        coursesRes.json(),
        sectionsRes.json(),
        groupsRes.json(),
      ]);

      setSchedules(schedulesData);
      setLabRooms(labRoomsData);
      setAssistants(assistantsData);
      setTimeSlots(timeSlotsData);
      setCourses(coursesData);
      setSections(sectionsData);
      setGroups(groupsData);
    } catch (error) {
      console.error("Failed to load data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const utilizationData = useMemo(() => {
    const counts: Record<string, number> = {};
    labRooms.forEach((room) => (counts[room.name] = 0));
    schedules
      .filter((s) => s.status === "active")
      .forEach((s) => {
        const room = labRooms.find((r) => r.id === s.labRoomId);
        if (room) counts[room.name]++;
      });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, [schedules, labRooms]);

  const columns: ColumnDef<ScheduleAssignment>[] = [
    {
      accessorKey: "courseId",
      header: "Course",
      cell: ({ row }) => {
        const course = courses.find((c) => c.id === row.original.courseId);
        return (
          <div className="flex flex-col">
            <span className="font-bold text-foreground">
              {course?.code || "N/A"}
            </span>
            <span className="text-xs text-muted-foreground font-medium truncate max-w-[150px]">
              {course?.name}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "sectionId",
      header: "Target",
      cell: ({ row }) => {
        const section = sections.find((s) => s.id === row.original.sectionId);
        const group = groups.find((g) => g.id === row.original.groupId);
        return (
          <div className="flex items-center gap-2">
            <span className="font-bold">{section?.name || "N/A"}</span>
            {group && (
              <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full font-black uppercase tracking-tighter">
                {group.name}
              </span>
            )}
          </div>
        );
      },
    },
    {
      accessorKey: "labRoomId",
      header: "Location",
      cell: ({ row }) => {
        const room = labRooms.find((r) => r.id === row.original.labRoomId);
        return (
          <div className="flex flex-col">
            <span className="font-bold">{room?.name || "N/A"}</span>
            <span className="text-xs text-muted-foreground font-medium">
              {room?.location}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "labAssistantId",
      header: "Assistant",
      cell: ({ row }) => {
        const assistant = assistants.find(
          (a) => a.labAssistantId === row.original.labAssistantId
        );
        return (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
              {assistant?.firstName?.[0]}
              {assistant?.lastName?.[0]}
            </div>
            <span className="font-bold text-sm">
              {assistant
                ? `${assistant.firstName} ${assistant.lastName}`
                : "N/A"}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "timeSlotId",
      header: "Schedule",
      cell: ({ row }) => {
        const slot = timeSlots.find((t) => t.id === row.original.timeSlotId);
        return slot ? (
          <div className="flex flex-col">
            <span className="font-bold text-sm">{slot.dayOfWeek}</span>
            <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
              {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
            </span>
          </div>
        ) : (
          "N/A"
        );
      },
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

    const conflictCheckRes = await fetch(`/api/schedules/check-conflict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        labRoomId: formData.labRoomId,
        labAssistantId: formData.labAssistantId,
        timeSlotId: formData.timeSlotId,
        excludeAssignmentId: editingSchedule?.id,
      }),
    });

    const conflicts = await conflictCheckRes.json();

    if (conflicts.length > 0) {
      alert(
        "Conflict detected: The selected lab room or assistant is already scheduled for this time slot."
      );
      return;
    }

    const scheduleData = {
      ...formData,
      status: "active",
      groupId:
        formData.groupId === "no-group" || !formData.groupId
          ? null
          : formData.groupId,
    };

    try {
      const method = editingSchedule ? "PUT" : "POST";
      const payload = editingSchedule
        ? { id: editingSchedule.id, ...scheduleData }
        : scheduleData;

      const response = await fetch("/api/schedules", {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        loadData();
        setIsDialogOpen(false);
        resetForm();
      }
    } catch (error) {
      console.error("An error occurred during form submission:", error);
    }
  };

  const handleEdit = (schedule: ScheduleAssignment) => {
    setEditingSchedule(schedule);
    setFormData({
      courseId: schedule.courseId,
      sectionId: schedule.sectionId,
      groupId: schedule.groupId || "no-group",
      labRoomId: schedule.labRoomId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this schedule assignment?")) {
      try {
        const response = await fetch("/api/schedules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: "inactive" }),
        });
        if (response.ok) loadData();
      } catch (error) {
        console.error("An error occurred during deletion:", error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      courseId: "",
      sectionId: "",
      groupId: "",
      labRoomId: "",
      labAssistantId: "",
      timeSlotId: "",
    });
    setEditingSchedule(null);
  };

  const formatTime = (time: string) => {
    if (!time) return "";
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    return `${hour % 12 || 12}:${minutes.padStart(2, "0")} ${ampm}`;
  };

  const availableGroups = formData.sectionId
    ? groups.filter((group) => group.sectionId === formData.sectionId)
    : [];

  const hasRequiredData =
    labRooms.length > 0 &&
    courses.length > 0 &&
    sections.length > 0 &&
    assistants.length > 0 &&
    timeSlots.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="lg:col-span-3 border-none shadow-2xl glass overflow-hidden flex flex-col">
          <CardHeader className="bg-muted/30 pb-6 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-black">
                  Active Assignments
                </CardTitle>
                <CardDescription className="font-medium">
                  Currently scheduled lab sessions.
                </CardDescription>
              </div>
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {schedules.filter((s) => s.status === "active").length}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6 flex-1">
            <DataTable
              columns={columns}
              data={schedules.filter((s) => s.status === "active")}
              searchKey="courseId"
              searchPlaceholder="Search by course..."
              action={
                <Dialog
                  open={isDialogOpen}
                  onOpenChange={(open) => {
                    setIsDialogOpen(open);
                    if (!open) resetForm();
                  }}
                >
                  <DialogTrigger asChild>
                    <Button
                      disabled={!hasRequiredData}
                      size="sm"
                      className="font-bold shadow-sm shadow-primary/20 h-9 rounded-xl"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      New Assignment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>
                        {editingSchedule ? "Edit Assignment" : "New Assignment"}
                      </DialogTitle>
                      <DialogDescription>
                        Configure resources and time for a lab session.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="space-y-6 pt-4">
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Course
                          </Label>
                          <Select
                            value={formData.courseId}
                            onValueChange={(v) =>
                              setFormData({ ...formData, courseId: v })
                            }
                          >
                            <SelectTrigger className="rounded-lg h-10">
                              <SelectValue placeholder="Select course" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {courses
                                .filter((c) => c.isActive)
                                .map((c) => (
                                  <SelectItem key={c.id} value={c.id}>
                                    {c.code} - {c.name}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              Section
                            </Label>
                            <Select
                              value={formData.sectionId}
                              onValueChange={(v) =>
                                setFormData({
                                  ...formData,
                                  sectionId: v,
                                  groupId: "",
                                })
                              }
                            >
                              <SelectTrigger className="rounded-lg h-10">
                                <SelectValue placeholder="Section" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl">
                                {sections
                                  .filter((s) => s.isActive)
                                  .map((s) => (
                                    <SelectItem key={s.id} value={s.id}>
                                      {s.name}
                                    </SelectItem>
                                  ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                              Group
                            </Label>
                            <Select
                              value={formData.groupId}
                              onValueChange={(v) =>
                                setFormData({ ...formData, groupId: v })
                              }
                            >
                              <SelectTrigger className="rounded-lg h-10">
                                <SelectValue placeholder="Group (Opt)" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl">
                                <SelectItem value="no-group">
                                  Whole Section
                                </SelectItem>
                                {availableGroups.map((g) => (
                                  <SelectItem key={g.id} value={g.id}>
                                    {g.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Lab Room
                          </Label>
                          <Select
                            value={formData.labRoomId}
                            onValueChange={(v) =>
                              setFormData({ ...formData, labRoomId: v })
                            }
                          >
                            <SelectTrigger className="rounded-lg h-10">
                              <SelectValue placeholder="Select lab room" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {labRooms
                                .filter((r) => r.isActive)
                                .map((r) => (
                                  <SelectItem key={r.id} value={r.id}>
                                    {r.name} ({r.location})
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Assistant
                          </Label>
                          <Select
                            value={formData.labAssistantId}
                            onValueChange={(v) =>
                              setFormData({ ...formData, labAssistantId: v })
                            }
                          >
                            <SelectTrigger className="rounded-lg h-10">
                              <SelectValue placeholder="Select assistant" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {assistants
                                .filter((a) => a.isActive)
                                .map((a) => (
                                  <SelectItem
                                    key={a.id}
                                    value={a.labAssistantId}
                                  >
                                    {a.firstName} {a.lastName}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            Time Slot
                          </Label>
                          <Select
                            value={formData.timeSlotId}
                            onValueChange={(v) =>
                              setFormData({ ...formData, timeSlotId: v })
                            }
                          >
                            <SelectTrigger className="rounded-lg h-10">
                              <SelectValue placeholder="Select time slot" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl">
                              {timeSlots
                                .filter((t) => t.isActive)
                                .map((t) => (
                                  <SelectItem key={t.id} value={t.id}>
                                    {t.dayOfWeek}: {formatTime(t.startTime)} -{" "}
                                    {formatTime(t.endTime)}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
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
                          {editingSchedule ? "Update" : "Create"}
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
                Room Utilization
              </CardTitle>
            </div>
            <CardDescription className="font-medium">
              Active sessions per laboratory
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={utilizationData} layout="vertical">
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
                    width={80}
                    tick={{
                      fontSize: 10,
                      fontWeight: "bold",
                      fill: "hsl(var(--muted-foreground))",
                    }}
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
                  <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={20}>
                    {utilizationData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-muted-foreground uppercase">
                  Top Laboratory
                </span>
                <span className="text-xs font-black text-primary px-2 py-0.5 bg-primary/10 rounded-full">
                  Busy
                </span>
              </div>
              <p className="text-lg font-black text-foreground">
                {utilizationData.sort((a, b) => b.count - a.count)[0]?.name ||
                  "None"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
