"use client";

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
  ArrowRight,
  Sparkles,
  Layout,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  type ScheduleAssignment,
  type LabRoom,
  type TimeSlot,
  type Section,
  type Group,
  type LabAssistant,
  type Course,
} from "@/types/type";

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

      if (
        !user ||
        user.role.toLowerCase() !== "lab_assistant" ||
        !user.labAssistantId
      ) {
        router.push("/assistant-login");
        return;
      }

      try {
        const response = await fetch(
          `/api/assistant-schedule?labAssistantId=${user.labAssistantId}`
        );
        if (!response.ok) throw new Error("Failed to fetch schedule data");
        const data = await response.json();
        setAssistant(data.assistant);

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
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Redesigned Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-green-600 font-semibold tracking-wide uppercase text-sm">
            <Sparkles className="h-4 w-4" />
            <span>Assistant Portal</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Weekly Schedule
          </h1>
          <p className="text-muted-foreground text-lg">
            Welcome back,{" "}
            <span className="text-foreground font-semibold">
              {assistant?.firstName} {assistant?.lastName}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/assistant/change-password">
            <Button
              variant="outline"
              className="rounded-xl h-11 border-border bg-card hover:bg-muted transition-colors"
            >
              <Key className="mr-2 h-4 w-4 text-orange-500" />
              Security
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className="rounded-xl h-11 bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/10"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </motion.div>

      {/* Modern Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Sessions"
          value={schedules.length}
          desc="Weekly tasks"
          icon={Calendar}
          color="blue"
        />
        <StatCard
          title="Active Courses"
          value={new Set(schedules.map((s) => s.course.id)).size}
          desc="Academic depth"
          icon={BookOpen}
          color="emerald"
        />
        <StatCard
          title="Unique Sections"
          value={new Set(schedules.map((s) => s.section.id)).size}
          desc="Group batches"
          icon={Layout}
          color="violet"
        />
        <StatCard
          title="Lab Locations"
          value={new Set(schedules.map((s) => s.labRoom.id)).size}
          desc="Across campus"
          icon={MapPin}
          color="orange"
        />
      </motion.div>

      {/* Enhanced Schedule Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="border-border shadow-sm overflow-hidden bg-card/50 backdrop-blur-sm">
          <CardHeader className="bg-muted/30 border-b py-6 px-8 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-2xl font-bold">
                Assigned Sessions
              </CardTitle>
              <CardDescription className="text-base">
                Comprehensive view of your weekly rotations
              </CardDescription>
            </div>
            <div className="hidden sm:block">
              <Badge
                variant="outline"
                className="bg-green-500/10 text-green-600 border-green-500/20 py-1.5 px-3 rounded-full font-medium"
              >
                {schedules.length} Active Assignments
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {schedules.length === 0 ? (
              <div className="text-center py-20">
                <div className="bg-muted rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">No schedules found</h3>
                <p className="text-muted-foreground">
                  You don't have any assignments for this semester yet.
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50 hover:bg-muted/50 border-b">
                      <TableHead className="py-4 px-8 font-bold text-foreground">
                        COURSE
                      </TableHead>
                      <TableHead className="py-4 font-bold text-foreground">
                        DAY & TIME
                      </TableHead>
                      <TableHead className="py-4 font-bold text-foreground">
                        SECTION INFO
                      </TableHead>
                      <TableHead className="py-4 font-bold text-foreground">
                        ROOM
                      </TableHead>
                      <TableHead className="py-4 px-8 text-right font-bold text-foreground">
                        LOCATION
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schedules.map((schedule, idx) => (
                      <motion.tr
                        key={schedule.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="group hover:bg-green-500/[0.03] transition-colors border-b last:border-0"
                      >
                        <TableCell className="py-6 px-8">
                          <div className="space-y-1">
                            <div className="font-bold text-lg text-foreground group-hover:text-green-600 transition-colors">
                              {schedule.course.code}
                            </div>
                            <div className="text-sm text-muted-foreground line-clamp-1">
                              {schedule.course.name}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-2">
                            <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-green-500/10 text-green-700 text-xs font-bold border border-green-500/10">
                              {schedule.timeSlot.dayOfWeek.toUpperCase()}
                            </div>
                            <div className="flex items-center text-sm font-medium text-muted-foreground">
                              <Clock className="h-3.5 w-3.5 mr-1.5 opacity-60" />
                              {formatTime(schedule.timeSlot.startTime)} -{" "}
                              {formatTime(schedule.timeSlot.endTime)}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="space-y-1.5">
                            <div className="text-sm font-semibold flex items-center">
                              <User className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" />
                              Section {schedule.section.name}
                            </div>
                            {schedule.group && (
                              <div className="text-xs text-muted-foreground bg-muted inline-block px-2 py-0.5 rounded">
                                Group: {schedule.group.name}
                              </div>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center font-bold text-foreground">
                            <MapPin className="h-4 w-4 mr-1.5 text-primary opacity-70" />
                            {schedule.labRoom.name}
                          </div>
                        </TableCell>
                        <TableCell className="py-6 px-8 text-right">
                          <span className="text-sm italic text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-lg border border-border/50">
                            {schedule.labRoom.location}
                          </span>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function StatCard({ title, value, desc, icon: Icon, color }: any) {
  const colors: any = {
    blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-green-600 border-green-500/20",
    violet: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    orange: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card
        className={`relative overflow-hidden border ${
          colors[color].split(" ")[2]
        } shadow-sm`}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">
            {title}
          </CardTitle>
          <div
            className={`p-2.5 rounded-xl ${colors[color]
              .split(" ")
              .slice(0, 2)
              .join(" ")}`}
          >
            <Icon className="h-5 w-5" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold tracking-tight">{value}</div>
          <p className="text-xs text-muted-foreground mt-1 font-medium">
            {desc}
          </p>
        </CardContent>
        <div
          className={`absolute -right-6 -bottom-6 h-24 w-24 rounded-full ${
            colors[color].split(" ")[0]
          } blur-3xl opacity-30`}
        />
      </Card>
    </motion.div>
  );
}
