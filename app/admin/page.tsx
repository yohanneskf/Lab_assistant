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
} from "lucide-react"; // Added BarChart2 and Layers for better icons

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    labRooms: 0,
    courses: 0,
    assistants: 0,
    schedules: 0,
  });

  useEffect(() => {
    // NOTE: In a real app, you would want to use a state like 'loading' here.
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
      title: "Total Lab Rooms",
      value: stats.labRooms,
      description: "Active lab spaces available",
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Total Courses",
      value: stats.courses,
      description: "Courses registered for labs",
      icon: BookOpen,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Lab Assistants",
      value: stats.assistants,
      description: "Staff assigned to sessions",
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      title: "Total Schedules",
      value: stats.schedules,
      description: "Current active assignments",
      icon: Calendar,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="space-y-8 p-4 md:p-6 lg:p-8">
      {" "}
      {/* Added padding for the main container */}
      {/* --- Header Section --- */}
      <div className="border-b pb-4">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-lg text-gray-500 mt-1">
          Welcome to the central command for the Lab Management System
        </p>
      </div>
      {/* --- Stat Cards Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const Icon = stat.icon;
          return (
            // Card Enhancement: subtle shadow, light background accent, and hover effect
            <Card
              key={stat.title}
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {stat.title}
                </CardTitle>
                {/* Icon Enhancement: Icon now has a colored circle background */}
                <div className={`p-2 rounded-full ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                {/* Value Enhancement: Larger, bolder text */}
                <div className="text-4xl font-extrabold text-gray-900 mt-2">
                  {stat.value}
                </div>
                {/* Description Style */}
                <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* --- Secondary Panels Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panel 1: Quick Actions (Now taking 2/3 width) */}
        <Card className="shadow-lg lg:col-span-2">
          <CardHeader className="border-b pb-3">
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <Layers className="h-6 w-6 mr-3 text-blue-600" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common administrative tasks to manage resources and scheduling
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            <ActionItem
              text="Create new lab room assignments"
              iconColor="text-blue-500"
            />
            <ActionItem
              text="Manage course offerings and details"
              iconColor="text-green-500"
            />
            <ActionItem
              text="Add new lab assistants to the system"
              iconColor="text-purple-500"
            />
            <ActionItem
              text="Generate and publish lab session schedules"
              iconColor="text-orange-500"
            />
          </CardContent>
        </Card>

        {/* Panel 2: System Status (Now taking 1/3 width) */}
        <Card className="shadow-lg">
          <CardHeader className="border-b pb-3">
            <CardTitle className="flex items-center text-2xl font-bold text-gray-800">
              <BarChart2 className="h-6 w-6 mr-3 text-red-600" />
              System Status
            </CardTitle>
            <CardDescription>
              Current status and technical information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-6">
            <StatusRow
              label="API Status:"
              value="Online"
              color="text-green-600"
            />
            <StatusRow
              label="Database Type:"
              value="PostgreSQL"
              color="text-blue-600"
            />
            <StatusRow
              label="Last Sync:"
              value={new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
              color="text-gray-700"
            />
            <StatusRow
              label="Maintenance Mode:"
              value="Off"
              color="text-green-600"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper components for clean code and reusable styling
const ActionItem = ({
  text,
  iconColor,
}: {
  text: string;
  iconColor: string;
}) => (
  <div className="flex items-center text-base font-medium text-gray-700 hover:text-gray-900 transition duration-150 p-2 rounded-md hover:bg-gray-50 cursor-pointer">
    <div
      className={`h-2 w-2 rounded-full mr-3 ${
        iconColor === "text-blue-500"
          ? "bg-blue-500"
          : iconColor === "text-green-500"
          ? "bg-green-500"
          : iconColor === "text-purple-500"
          ? "bg-purple-500"
          : "bg-orange-500"
      }`}
    ></div>
    {text}
  </div>
);

const StatusRow = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) => (
  <div className="flex justify-between text-base border-b border-gray-100 pb-2 last:border-b-0 last:pb-0">
    <span className="font-medium text-gray-600">{label}</span>
    <span className={`font-semibold ${color}`}>{value}</span>
  </div>
);
