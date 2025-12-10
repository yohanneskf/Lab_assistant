"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/lib/auth";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  LogOut,
  Key,
  BookOpen,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
// Import your types from a separate types file
import {
  type ScheduleAssignment,
  type LabRoom,
  type TimeSlot,
  type Section,
  type Group,
  type LabAssistant,
  type Course,
} from "@/types/type"; // Assuming "@/types/type" exists

// This interface is fine, as it's just for client-side typing
interface ScheduleWithDetails extends ScheduleAssignment {
  id: string;
  course: Course;
  labRoom: LabRoom;
  timeSlot: TimeSlot;
  section: Section;
  group?: Group;
}

export default function AssistantDashboard() {
  const [schedules, setSchedules] = useState<ScheduleWithDetails[]>([]);
  const [assistant, setAssistant] = useState<LabAssistant | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchSchedules = async () => {
      const user = AuthService.getCurrentUser();

      // Basic client-side guard for the dashboard
      if (
        !user ||
        user.role.toLowerCase() !== "lab_assistant" ||
        !user.labAssistantId
      ) {
        setLoading(false);
        // Redirect to login if not authenticated as an assistant
        router.push("/assistant-login");
        return;
      }

      try {
        // Fetch schedules using the labAssistantId from the user object
        const response = await fetch(
          `/api/assistant-schedule?labAssistantId=${user.labAssistantId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedule data");
        }
        const data = await response.json();

        setAssistant(data.assistant);

        // Sort the schedules by day of week and time
        const dayOrder = [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ];
        const sortedSchedules = data.schedules.sort(
          (a: ScheduleWithDetails, b: ScheduleWithDetails) => {
            const dayA = dayOrder.indexOf(a.timeSlot.dayOfWeek);
            const dayB = dayOrder.indexOf(b.timeSlot.dayOfWeek);
            if (dayA !== dayB) return dayA - dayB;
            // Lexicographical time comparison is fine for standard "HH:mm" format
            return a.timeSlot.startTime.localeCompare(b.timeSlot.startTime);
          }
        );

        setSchedules(sortedSchedules);
      } catch (error) {
        console.error("Error fetching schedules:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSchedules();
  }, [router]);

  const handleLogout = () => {
    AuthService.logout();
    router.push("/assistant-login");
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(":");
    const hour = Number.parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
        <p className="mt-3 text-lg font-medium text-gray-700">
          Loading your weekly schedule...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* --- MODIFICATION: Header & Action Buttons for Mobile ---
        - flex-col on mobile (default)
        - md:flex-row to return to row layout on medium screens
        - Added gap-4 for vertical space on mobile
      */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 gap-4">
        <div>
          {/* Increased font size slightly on mobile for clarity */}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight flex items-center">
            <Calendar className="h-6 w-6 sm:h-7 sm:w-7 mr-3 text-green-600" />
            My Weekly Schedule
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-1">
            Welcome,{" "}
            <span className="font-semibold">
              {assistant?.firstName} {assistant?.lastName}
            </span>{" "}
            ({assistant?.labAssistantId})
          </p>
        </div>

        {/* Button Group: Use flex-row but wrap if needed on very small screens, 
            or force nowrap and allow scrolling if necessary, but flex-row space-x-3 is usually fine. */}
        <div className="flex space-x-3 w-full md:w-auto mt-2 md:mt-0 justify-end">
          <Link
            href="/assistant/change-password"
            passHref
            className="w-1/2 md:w-auto"
          >
            <Button
              variant="outline"
              className="text-gray-700 hover:bg-gray-100 border-gray-300 w-full"
            >
              <Key className="mr-1 h-4 w-4 text-orange-500" />
              <span className="hidden sm:inline">Change Password</span>
              <span className="sm:hidden">Password</span>
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 transition duration-150 w-1/2 md:w-auto"
          >
            <LogOut className="mr-1 h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
            <span className="sm:hidden">Log Out</span>
          </Button>
        </div>
      </div>

      {/* --- Stats Cards --- (The responsive grid handles this well already) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Sessions
            </CardTitle>
            <Calendar className="h-5 w-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{schedules.length}</div>
            <p className="text-sm text-muted-foreground mt-1">
              Active assignments
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Courses
            </CardTitle>
            <BookOpen className="h-5 w-5 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {new Set(schedules.map((s) => s.course.id)).size}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Different courses
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Sections
            </CardTitle>
            <Clock className="h-5 w-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {new Set(schedules.map((s) => s.section.id)).size}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Unique sections
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Lab Rooms
            </CardTitle>
            <MapPin className="h-5 w-5 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {new Set(schedules.map((s) => s.labRoom.id)).size}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Different rooms
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Department
            </CardTitle>
            <User className="h-5 w-5 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold truncate">
              {assistant?.department || "N/A"}
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your primary dept.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* --- Schedule Table --- (The overflow-x-auto handles table responsiveness) */}
      <Card className="shadow-xl">
        <CardHeader className="bg-gray-50 rounded-t-lg border-b">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Assigned Sessions
          </CardTitle>
          <CardDescription className="text-gray-600">
            A comprehensive list of all your weekly laboratory assignments,
            sorted by day and time.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          {schedules.length === 0 ? (
            <div className="text-center py-12 text-gray-500 italic text-lg">
              No schedule assignments found for you this semester.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="w-[150px] font-bold text-gray-700">
                      Course
                    </TableHead>
                    <TableHead className="w-[150px] font-bold text-gray-700">
                      Day & Time
                    </TableHead>
                    <TableHead className="w-[150px] font-bold text-gray-700">
                      Section & Group
                    </TableHead>
                    <TableHead className="w-[150px] font-bold text-gray-700">
                      Room
                    </TableHead>
                    <TableHead className="w-[150px] font-bold text-gray-700">
                      Location
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedules.map((schedule) => (
                    <TableRow
                      key={schedule.id}
                      className="border-b hover:bg-green-50/50 transition-colors duration-200"
                    >
                      <TableCell className="font-medium">
                        <div className="space-y-1">
                          <div className="font-semibold text-gray-800">
                            {schedule.course.code}
                          </div>
                          <div className="text-sm text-gray-600">
                            {schedule.course.name}
                          </div>
                          <Badge className="text-xs bg-gray-200 text-gray-700 hover:bg-gray-300">
                            {schedule.course.credits} Credits
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <Badge
                            variant="outline"
                            className="font-bold bg-green-100 text-green-700 border-green-300"
                          >
                            {schedule.timeSlot.dayOfWeek}
                          </Badge>
                          <div className="text-sm font-medium text-gray-700">
                            {formatTime(schedule.timeSlot.startTime)} -{" "}
                            {formatTime(schedule.timeSlot.endTime)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-700">
                            Section: {schedule.section.name}
                          </div>
                          {schedule.group && (
                            <Badge
                              variant="secondary"
                              className="text-xs bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
                            >
                              Group: {schedule.group.name}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell className="font-semibold text-blue-700">
                        {schedule.labRoom.name}
                      </TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {schedule.labRoom.location}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
