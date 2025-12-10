"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AuthService } from "@/lib/auth";
import {
  Building2,
  BookOpen,
  Users,
  Clock,
  Calendar,
  LogOut,
  Menu,
  X,
  Layers,
  LayoutDashboard,
} from "lucide-react";

const navigation = [
  // Renamed the icon for Dashboard for clarity
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Lab Rooms", href: "/admin/lab-rooms", icon: Building2 },
  { name: "Courses", href: "/admin/courses", icon: BookOpen },
  { name: "Lab Assistants", href: "/admin/assistants", icon: Users },
  { name: "Time Slots", href: "/admin/time-slots", icon: Clock },
  { name: "Sections & Groups", href: "/admin/sections", icon: Layers },
  { name: "Schedules", href: "/admin/schedules", icon: Calendar },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    AuthService.logout();
    router.push("/");
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        {/* Use the primary button style for better visibility */}
        <Button
          variant="default"
          size="icon"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-blue-600 hover:bg-blue-700 shadow-lg"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 shadow-xl lg:shadow-md", // Added shadow and slightly longer transition
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header/Logo Section */}
          <div className="flex items-center justify-center h-16 px-4 border-b border-blue-600 bg-blue-600 shadow-md">
            {" "}
            {/* Primary color header */}
            <h1 className="text-2xl font-bold text-white tracking-wider">
              LMS Admin
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {" "}
            {/* Increased vertical padding and added overflow */}
            {navigation.map((item) => {
              const Icon = item.icon;
              // Check if the current path starts with the item's href for better sub-route matching
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-150 ease-in-out", // Refined spacing and font
                    isActive
                      ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600" // Stronger active state
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Logout Section */}
          <div className="p-4 border-t border-gray-200">
            <Button
              variant="outline"
              className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700" // Red accent for Sign Out
              onClick={handleLogout}
            >
              <LogOut className="mr-3 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-70 lg:hidden" // Darker overlay for better focus
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
