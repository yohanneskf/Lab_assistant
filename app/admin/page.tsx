"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Building2,
  BookOpen,
  Users,
  Calendar,
  BarChart2,
  Layers,
  ArrowRight,
  Plus,
  Settings,
  Shield,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    labRooms: 0,
    courses: 0,
    assistants: 0,
    schedules: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/dashboard");
        if (!response.ok) {
          throw new Error("Failed to fetch dashboard data");
        }
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      title: "Lab Rooms",
      value: stats.labRooms,
      description: "Active spaces",
      icon: Building2,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Courses",
      value: stats.courses,
      description: "Registered programs",
      icon: BookOpen,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Assistants",
      value: stats.assistants,
      description: "Staff members",
      icon: Users,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      title: "Schedules",
      value: stats.schedules,
      description: "Active sessions",
      icon: Calendar,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="space-y-10">
      {/* Header section with refined typography */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Overview
          </h1>
          <p className="text-muted-foreground mt-1 text-lg">
            Analytics and management for your laboratory system.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 bg-emerald-500/10 text-emerald-600 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/20">
            <Activity className="h-4 w-4" />
            <span>System Live</span>
          </div>
          <div className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
      </motion.div>

      {/* Grid for stats with modern card design */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {statCards.map((stat) => (
          <motion.div key={stat.title} variants={itemVariants}>
            <Card
              className={`relative overflow-hidden border ${stat.border} hover:shadow-lg transition-shadow duration-300 group`}
            >
              <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {stat.title}
                </CardTitle>
                <div
                  className={`p-2 rounded-xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center">
                  <span className="text-emerald-500 font-medium mr-1">
                    ↑ 12%
                  </span>
                  {stat.description}
                </p>
              </CardContent>
              {/* Subtle background decoration */}
              <div
                className={`absolute -right-4 -bottom-4 h-24 w-24 rounded-full ${stat.bg} blur-2xl opacity-50`}
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Main content area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Actions Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2"
        >
          <Card className="h-full border-border shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl flex items-center">
                    <Layers className="h-5 w-5 mr-2 text-primary" />
                    Management Controls
                  </CardTitle>
                  <CardDescription>
                    Direct access to key administrative features
                  </CardDescription>
                </div>
                <Settings className="h-5 w-5 text-muted-foreground hover:rotate-90 transition-transform duration-500 cursor-pointer" />
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ActionCard
                  title="Assign Lab Rooms"
                  desc="Configure space availability"
                  icon={Building2}
                  color="blue"
                />
                <ActionCard
                  title="Manage Courses"
                  desc="Update academic registration"
                  icon={BookOpen}
                  color="emerald"
                />
                <ActionCard
                  title="Assistant Staff"
                  desc="Manage roles and access"
                  icon={Users}
                  color="violet"
                />
                <ActionCard
                  title="Session Schedules"
                  desc="Publish and sync rotations"
                  icon={Calendar}
                  color="orange"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System & Security Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-6"
        >
          <Card className="border-border shadow-sm">
            <CardHeader className="border-b bg-muted/30">
              <CardTitle className="text-xl flex items-center">
                <Shield className="h-5 w-5 mr-2 text-emerald-500" />
                Security & Sync
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-5">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Database Status</p>
                  <p className="text-xs text-muted-foreground italic">
                    PostgreSQL Managed
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>

              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">API Integrity</p>
                  <p className="text-xs text-muted-foreground italic">
                    v2.4 Stable
                  </p>
                </div>
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </div>

              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium">Backup Schedule</p>
                  <p className="text-xs text-muted-foreground italic">
                    Daily at 02:00 UTC
                  </p>
                </div>
                <p className="text-xs font-semibold text-primary">ENABLED</p>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground mb-3 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  Last synchronization complete
                </p>
                <div className="text-sm font-medium bg-muted p-2 rounded-lg text-center">
                  {new Date().toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground border-none shadow-lg overflow-hidden relative">
            <CardContent className="p-6 relative z-10">
              <h3 className="font-bold flex items-center mb-2">
                <Plus className="h-4 w-4 mr-2" />
                Quick Deploy
              </h3>
              <p className="text-sm opacity-90 mb-4">
                Automate your laboratory scheduling with our smart allocation
                engine.
              </p>
              <button className="w-full bg-white text-primary py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-opacity-90 transition-all active:scale-95">
                Run Optimizer
              </button>
            </CardContent>
            <div className="absolute top-0 right-0 h-full w-1/3 bg-white/10 -skew-x-12 translate-x-8" />
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

// Helper components for the redesigned Action Cards
function ActionCard({ title, desc, icon: Icon, color }: any) {
  const colors: any = {
    blue: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    emerald: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    violet: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    orange: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-4 rounded-xl border border-border hover:border-primary/30 hover:bg-muted/30 transition-all cursor-pointer group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className={`p-2 rounded-lg ${colors[color]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" />
      </div>
      <h4 className="font-bold text-base group-hover:text-primary transition-colors">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
