"use client";

import type React from "react";
import { useState, useEffect } from "react";
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
  DialogFooter, // Added DialogFooter import
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

// Assuming types are defined here for completeness in the example, or imported.
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

      const schedulesData = await schedulesRes.json();
      const labRoomsData = await labRoomsRes.json();
      const assistantsData = await assistantsRes.json();
      const timeSlotsData = await timeSlotsRes.json();
      const coursesData = await coursesRes.json();
      const sectionsData = await sectionsRes.json();
      const groupsData = await groupsRes.json();

      setSchedules(schedulesData);
      setLabRooms(labRoomsData);
      setAssistants(assistantsData);
      setTimeSlots(timeSlotsData);
      setCourses(coursesData);
      setSections(sectionsData);
      setGroups(groupsData);
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // --- Conflict Check ---
    const conflictCheckRes = await fetch(`/api/schedules/check-conflict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        labRoomId: formData.labRoomId,
        labAssistantId: formData.labAssistantId,
        timeSlotId: formData.timeSlotId,
        // Exclude the current assignment ID if editing
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
      // Convert "no-group" back to null for the API
      groupId: formData.groupId === "no-group" ? null : formData.groupId,
    };

    try {
      if (editingSchedule) {
        const response = await fetch("/api/schedules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingSchedule.id, ...scheduleData }),
        });
        if (response.ok) {
          loadData();
          setIsDialogOpen(false);
          resetForm();
        } else {
          console.error("Failed to update schedule");
        }
      } else {
        const response = await fetch("/api/schedules", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(scheduleData),
        });
        if (response.ok) {
          loadData();
          setIsDialogOpen(false);
          resetForm();
        } else {
          console.error("Failed to create schedule");
        }
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
      // Map null group ID to "no-group" for the select dropdown
      groupId: schedule.groupId || "no-group",
      labRoomId: schedule.labRoomId,
      labAssistantId: schedule.labAssistantId,
      timeSlotId: schedule.timeSlotId,
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (
      confirm(
        "Are you sure you want to delete this schedule assignment? This will mark it as inactive."
      )
    ) {
      try {
        // Assuming deletion is handled by setting status to inactive
        const response = await fetch("/api/schedules", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: "inactive" }),
        });
        if (response.ok) {
          loadData();
        } else {
          console.error("Failed to delete schedule");
        }
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
    if (!open) {
      resetForm();
    }
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
    const hour = Number.parseInt(hours);
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
    <div className="space-y-8">
      {" "}
      {/* Consistent outside spacing */}
      {/* --- Header and Action Button --- */}
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            <Calendar className="h-7 w-7 mr-3 text-blue-600" />{" "}
            {/* Consistent blue icon */}
            Schedule Assignments
          </h1>
          <p className="text-lg text-gray-500 mt-1">
            Manage lab session schedules by assigning resources and time
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <Button
              disabled={!hasRequiredData}
              className="bg-blue-600 hover:bg-blue-700 transition duration-150 shadow-md"
            >
              <Plus className="mr-2 h-5 w-5" />
              Add Schedule
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                {editingSchedule
                  ? "Edit Schedule Assignment"
                  : "Add New Schedule Assignment"}
              </DialogTitle>
              <DialogDescription>
                {editingSchedule
                  ? "Update schedule assignment details, checking for conflicts."
                  : "Create a new lab session schedule, ensuring no resource conflicts."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-5 pt-4">
              <div className="space-y-2">
                <Label htmlFor="courseId" className="font-semibold">
                  Course
                </Label>
                <Select
                  value={formData.courseId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, courseId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses
                      .filter((c) => c.isActive)
                      .map((course) => (
                        <SelectItem key={course.id} value={course.id}>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {course.code} - {course.name}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {course.department} • {course.year} Year
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sectionId" className="font-semibold">
                  Section
                </Label>
                <Select
                  value={formData.sectionId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, sectionId: value, groupId: "" })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections
                      .filter((s) => s.isActive)
                      .map((section) => (
                        <SelectItem key={section.id} value={section.id}>
                          {section.name} - {section.year} Year (
                          {section.department})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              {availableGroups.length > 0 && (
                <div className="space-y-2">
                  <Label htmlFor="groupId" className="font-semibold">
                    Group (Optional)
                  </Label>
                  <Select
                    value={formData.groupId}
                    onValueChange={(value) =>
                      setFormData({ ...formData, groupId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a group (optional)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no-group">
                        No specific group
                      </SelectItem>
                      {availableGroups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name} (Capacity: {group.capacity})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="labRoomId" className="font-semibold">
                  Lab Room
                </Label>
                <Select
                  value={formData.labRoomId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, labRoomId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab room" />
                  </SelectTrigger>
                  <SelectContent>
                    {labRooms
                      .filter((r) => r.isActive)
                      .map((room) => (
                        <SelectItem key={room.id} value={room.id}>
                          {room.name} - {room.location} (Capacity:{" "}
                          {room.capacity})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="labAssistantId" className="font-semibold">
                  Lab Assistant
                </Label>
                <Select
                  value={formData.labAssistantId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, labAssistantId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a lab assistant" />
                  </SelectTrigger>
                  <SelectContent>
                    {assistants
                      .filter((a) => a.isActive)
                      .map((assistant) => (
                        <SelectItem
                          key={assistant.id}
                          value={assistant.labAssistantId}
                        >
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {assistant.firstName} {assistant.lastName}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {assistant.email}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeSlotId" className="font-semibold">
                  Time Slot
                </Label>
                <Select
                  value={formData.timeSlotId}
                  onValueChange={(value) =>
                    setFormData({ ...formData, timeSlotId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots
                      .filter((t) => t.isActive)
                      .map((slot) => (
                        <SelectItem key={slot.id} value={slot.id}>
                          {slot.dayOfWeek} {formatTime(slot.startTime)} -{" "}
                          {formatTime(slot.endTime)} ({slot.slotType})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter className="pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  {editingSchedule ? "Update Schedule" : "Create Schedule"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* --- Missing Data Warning --- */}
      {!hasRequiredData && (
        <Card className="border-yellow-300 bg-yellow-50 shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3 text-yellow-800">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-base">Missing Required Data</p>
                <p className="text-sm text-yellow-700">
                  To create a schedule, you must have active **Courses**, **Lab
                  Rooms**, **Sections**, **Lab Assistants**, and **Time Slots**
                  configured in the system.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      {/* --- Data Table Card --- */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-gray-800">
            Current Assignments (
            {schedules.filter((s) => s.status === "active").length})
          </CardTitle>
          <CardDescription className="text-gray-600">
            A list of all active lab session assignments.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {schedules.filter((s) => s.status === "active").length === 0 ? (
            <div className="text-center py-8 text-gray-500 italic">
              No active schedule assignments found. Click "Add Schedule" to
              create the first one.
            </div>
          ) : (
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow>
                  <TableHead className="w-[20%] font-bold text-gray-700">
                    Course
                  </TableHead>
                  <TableHead className="w-[18%] font-bold text-gray-700">
                    Section & Group
                  </TableHead>
                  <TableHead className="w-[17%] font-bold text-gray-700">
                    Lab Room
                  </TableHead>
                  <TableHead className="w-[25%] font-bold text-gray-700">
                    Lab Assistant
                  </TableHead>
                  <TableHead className="w-[12%] font-bold text-gray-700">
                    Day & Time
                  </TableHead>
                  <TableHead className="text-right w-[8%] font-bold text-gray-700">
                    Actions
                  </TableHead>
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
                        className="hover:bg-blue-50/50 transition-colors"
                      >
                        <TableCell>
                          <div>
                            <div className="font-semibold text-gray-800">
                              {course?.code}
                            </div>
                            <div className="text-sm text-gray-500">
                              {course?.name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-gray-800">
                              {section?.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {section?.department}
                              {group && (
                                <span className="font-semibold text-blue-700">
                                  {" "}
                                  • {group.name}
                                </span>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-gray-800">
                              {labRoom?.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              {labRoom?.location}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <div className="font-medium text-gray-800">
                              {assistant?.firstName} {assistant?.lastName}
                            </div>
                            <div className="text-xs text-gray-500">
                              {assistant?.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {timeSlot && (
                            <div>
                              <div className="font-medium text-gray-800">
                                {timeSlot.dayOfWeek}
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatTime(timeSlot.startTime)} -{" "}
                                {formatTime(timeSlot.endTime)}
                              </div>
                            </div>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(schedule)}
                              className="text-blue-600 hover:bg-blue-100/70"
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(schedule.id)}
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
