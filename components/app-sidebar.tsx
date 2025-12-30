"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Building2,
  Users,
  Calendar,
  LayoutDashboard,
  ShieldCheck,
  ChevronRight,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { type LucideIcon } from "lucide-react";

interface NavItem {
  title: string;
  url?: string;
  icon: LucideIcon;
  isActive?: boolean;
  items?: {
    title: string;
    url: string;
  }[];
}

const data: Record<"admin" | "assistant", NavItem[]> = {
  admin: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Resources",
      icon: Building2,
      isActive: true,
      items: [
        {
          title: "Lab Rooms",
          url: "/admin/lab-rooms",
        },
        {
          title: "Courses",
          url: "/admin/courses",
        },
      ],
    },
    {
      title: "Staff Management",
      icon: Users,
      items: [
        {
          title: "Lab Assistants",
          url: "/admin/assistants",
        },
      ],
    },
    {
      title: "Scheduling",
      icon: Calendar,
      items: [
        {
          title: "Time Slots",
          url: "/admin/time-slots",
        },
        {
          title: "Sections & Groups",
          url: "/admin/sections",
        },
        {
          title: "Schedules",
          url: "/admin/schedules",
        },
      ],
    },
  ],
  assistant: [
    {
      title: "Dashboard",
      url: "/assistant",
      icon: LayoutDashboard,
    },
    {
      title: "Profile Settings",
      url: "/assistant/change-password",
      icon: Settings,
    },
  ],
};

export function AppSidebar({
  role = "admin",
  ...props
}: { role?: "admin" | "assistant" } & React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { isMobile } = useSidebar();
  const navItems = data[role];

  return (
    <Sidebar
      collapsible="icon"
      className={cn(
        "border-r border-border",
        isMobile && "bg-zinc-900 text-zinc-50 border-r-0"
      )}
      {...props}
    >
      <SidebarHeader className="h-16 border-b border-border flex items-center px-4">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
            <ShieldCheck className="size-6" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
            <span className="truncate font-black text-foreground uppercase tracking-tight">
              LMS Portal
            </span>
            <span className="truncate text-xs font-bold text-muted-foreground uppercase opacity-70">
              {role} Management
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarMenu>
          {navItems.map((item) => {
            const isActive =
              pathname === item.url ||
              (item.url !== "/admin" &&
                item.url !== "/assistant" &&
                item.url &&
                pathname.startsWith(item.url));

            if (!item.items) {
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive}
                    tooltip={item.title}
                    className={cn(
                      "font-bold transition-all duration-200 hover:bg-primary/10",
                      isActive &&
                        "bg-primary/10 text-primary hover:bg-primary/20",
                      isMobile &&
                        "hover:bg-zinc-800 text-zinc-300 hover:text-white"
                    )}
                  >
                    <a href={item.url}>
                      <item.icon
                        className={cn(
                          "size-5",
                          isActive ? "text-primary" : "text-muted-foreground",
                          isMobile && isActive
                            ? "text-primary"
                            : isMobile
                            ? "text-zinc-400"
                            : ""
                        )}
                      />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            }

            return (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.items?.some(
                  (subItem) => pathname === subItem.url
                )}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className={cn(
                        "font-bold hover:bg-primary/10",
                        isMobile &&
                          "hover:bg-zinc-800 text-zinc-300 hover:text-white"
                      )}
                    >
                      <item.icon
                        className={cn(
                          "size-5 text-muted-foreground",
                          isMobile && "text-zinc-400"
                        )}
                      />
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                      <ChevronRight className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub className="border-l border-primary/20 ml-6 group-data-[collapsible=icon]:hidden">
                      {item.items.map((subItem) => {
                        const isSubActive = pathname === subItem.url;
                        return (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              asChild
                              isActive={isSubActive}
                              className={cn(
                                "font-semibold text-xs transition-colors py-2",
                                isSubActive
                                  ? "text-primary bg-primary/5"
                                  : "text-muted-foreground hover:text-foreground",
                                isMobile && isSubActive
                                  ? "text-primary bg-zinc-800"
                                  : isMobile
                                  ? "text-zinc-400 hover:text-white hover:bg-zinc-800"
                                  : ""
                              )}
                            >
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
