"use client";

import type React from "react";
import { useState, useEffect } from "react";
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Calendar, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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
// ... [interface definitions remain the same]
interface LabRoom {
  id: string;
  name: string;
  capacity: number;
  location: string;
  isActive: boolean;
  equipment: string[];
}
interface LabAssistant {
  id: string;
  labAssistantId: string;
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}
interface TimeSlot {
  id: string;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  slotType: string;
  isActive: boolean;
}
interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  year: number;
  credits: number;
  isActive: boolean;
}
interface Section {
  id: string;
  name: string;
  year: number;
  department: string;
  capacity: number;
  isActive: boolean;
}
interface Group {
  id: string;
  name: string;
  sectionId: string;
  capacity: number;
  isActive: boolean;
}

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
      groupId: formData.groupId === "no-group" ? null : formData.groupId,
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

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) resetForm();
  };

  const getLabRoom = (id: string) => labRooms.find((room) => room.id === id);
  const getAssistant = (labAssistantId: string) =>
    assistants.find((assistant) => assistant.labAssistantId === labAssistantId);
  const getTimeSlot = (id: string) => timeSlots.find((slot) => slot.id === id);
  const getSection = (id: string) =>
    sections.find((section) => section.id === id);
  const getGroup = (id: string) => groups.find((group) => group.id === id);
  const getCourse = (id: string) => courses.find((course) => course.id === id);

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes.padStart(2, "0")} ${ampm}`;
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-8 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-6">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl font-black text-foreground tracking-tight flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            Schedules
          </h1>
          <p className="text-muted-foreground mt-2 font-medium">
            Manage and assign lab resources to academic sessions.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <Button
                disabled={!hasRequiredData}
                size="lg"
                className="font-bold shadow-lg shadow-primary/20"
              >
                <Plus className="mr-2 h-5 w-5" />
                New Assignment
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
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
                      <SelectTrigger>
                        <SelectValue placeholder="Select course" />
                      </SelectTrigger>
                      <SelectContent>
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
                        <SelectTrigger>
                          <SelectValue placeholder="Section" />
                        </SelectTrigger>
                        <SelectContent>
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
                        <SelectTrigger>
                          <SelectValue placeholder="Group (Opt)" />
                        </SelectTrigger>
                        <SelectContent>
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
                      <SelectTrigger>
                        <SelectValue placeholder="Select lab room" />
                      </SelectTrigger>
                      <SelectContent>
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
                      <SelectTrigger>
                        <SelectValue placeholder="Select assistant" />
                      </SelectTrigger>
                      <SelectContent>
                        {assistants
                          .filter((a) => a.isActive)
                          .map((a) => (
                            <SelectItem key={a.id} value={a.labAssistantId}>
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
                      <SelectTrigger>
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
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
        </motion.div>
      </div>

      <AnimatePresence>
        {!hasRequiredData && !isLoading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <Card className="border-orange-500/20 bg-orange-500/5 shadow-none">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 text-orange-600">
                  <div className="p-2 bg-orange-600/10 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold">Setup Required</p>
                    <p className="text-sm opacity-90">
                      Ensure you have active courses, lab rooms, sections,
                      assistants, and time slots configured before creating
                      assignments.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={itemVariants}>
        <Card className="border-none shadow-2xl glass overflow-hidden">
          <CardHeader className="bg-muted/30 pb-6">
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
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Course</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Assistant</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules
                    .filter((s) => s.status === "active")
                    .map((schedule) => {
                      const course = getCourse(schedule.courseId);
                      const section = getSection(schedule.sectionId);
                      const group = schedule.groupId
                        ? getGroup(schedule.groupId)
                        : null;
                      const labRoom = getLabRoom(schedule.labRoomId);
                      const assistant = getAssistant(schedule.labAssistantId);
                      const timeSlot = getTimeSlot(schedule.timeSlotId);

                      return (
                        <TableRow
                          key={schedule.id}
                          className="group transition-colors"
                        >
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-bold text-foreground">
                                {course?.code}
                              </span>
                              <span className="text-xs text-muted-foreground font-medium truncate max-w-[150px]">
                                {course?.name}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <span className="font-bold">{section?.name}</span>
                              {group && (
                                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-bold">
                                  {group.name}
                                </span>
                              )}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex flex-col">
                              <span className="font-bold">{labRoom?.name}</span>
                              <span className="text-xs text-muted-foreground font-medium">
                                {labRoom?.location}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs">
                                {assistant?.firstName[0]}
                                {assistant?.lastName[0]}
                              </div>
                              <span className="font-bold text-sm">
                                {assistant?.firstName} {assistant?.lastName}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {timeSlot && (
                              <div className="flex flex-col">
                                <span className="font-bold text-sm">
                                  {timeSlot.dayOfWeek}
                                </span>
                                <span className="text-xs text-muted-foreground font-medium">
                                  {formatTime(timeSlot.startTime)} -{" "}
                                  {formatTime(timeSlot.endTime)}
                                </span>
                              </div>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleEdit(schedule)}
                                className="h-8 w-8 text-primary hover:bg-primary/10"
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => handleDelete(schedule.id)}
                                className="h-8 w-8 text-destructive hover:bg-destructive/10"
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
            </div>
            {schedules.filter((s) => s.status === "active").length === 0 && (
              <div className="p-12 text-center">
                <Calendar className="h-12 w-12 text-muted-foreground/20 mx-auto mb-4" />
                <p className="text-muted-foreground font-medium text-lg">
                  No assignments found.
                </p>
                <p className="text-sm text-muted-foreground">
                  Click "New Assignment" to get started.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
