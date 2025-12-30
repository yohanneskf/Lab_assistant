"use client";

import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserNav } from "@/components/user-nav";

const routeTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/lab-rooms": "Lab Rooms",
  "/admin/courses": "Courses",
  "/admin/assistants": "Lab Assistants",
  "/admin/time-slots": "Time Slots",
  "/admin/sections": "Sections & Groups",
  "/admin/schedules": "Schedules",
  "/assistant": "Dashboard",
  "/assistant/change-password": "Profile Settings",
};

export function AppHeader() {
  const pathname = usePathname();
  // Simple check for exact match or fallback to a generic logic if needed
  // For now, exact match or partial match for sub-routes could be added
  const title = routeTitles[pathname] || "Laboratory Management System";

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 px-4 transition-[width,height] ease-linear bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <div className="h-8 w-px bg-border mx-2" />
        <h1 className="text-sm font-black uppercase tracking-wider text-muted-foreground hidden sm:block">
          {title}
        </h1>
        <h1 className="text-sm font-black uppercase tracking-wider text-muted-foreground sm:hidden">
          LMS
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <UserNav />
      </div>
    </header>
  );
}
