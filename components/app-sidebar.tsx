"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Building2,
  BookOpen,
  Users,
  Clock,
  Calendar,
  LogOut,
  Layers,
  LayoutDashboard,
  ShieldCheck,
  ChevronRight,
  Settings,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { AuthService } from "@/lib/auth";
import { ThemeToggle } from "@/components/theme-toggle";
import { UserProfileDialog } from "@/components/user-profile-dialog";

const data = {
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
  const router = useRouter();
  const { isMobile } = useSidebar();
  const user = AuthService.getCurrentUser();
  const navItems = data[role];
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  const handleLogout = () => {
    AuthService.logout();
    router.push("/");
  };

  return (
    <Sidebar collapsible="icon" className="border-r border-border" {...props}>
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
                        "bg-primary/10 text-primary hover:bg-primary/20"
                    )}
                  >
                    <a href={item.url}>
                      <item.icon
                        className={cn(
                          "size-5",
                          isActive ? "text-primary" : "text-muted-foreground"
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
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.title}
                      className="font-bold hover:bg-primary/10"
                    >
                      <item.icon className="size-5 text-muted-foreground" />
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
                                  : "text-muted-foreground hover:text-foreground"
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

      <SidebarFooter className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-primary/5 transition-colors rounded-xl p-2"
                    >
                      <Avatar className="h-8 w-8 rounded-lg border-2 border-primary/20 shadow-sm">
                        <AvatarImage
                          src={undefined}
                          alt={user?.username || "User"}
                        />
                        <AvatarFallback className="bg-primary/10 text-primary font-black uppercase text-xs">
                          {user?.username?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden ml-2">
                        <span className="truncate font-black text-foreground">
                          {user?.firstName} {user?.lastName}
                        </span>
                        <span className="truncate text-[10px] font-bold text-muted-foreground uppercase opacity-70">
                          @{user?.username}
                        </span>
                      </div>
                      <ChevronRight className="ml-auto size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl shadow-2xl border-border bg-card/80 backdrop-blur-xl"
                    side={isMobile ? "bottom" : "right"}
                    align="end"
                    sideOffset={4}
                  >
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-3 px-3 py-2">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarImage
                            src={undefined}
                            alt={user?.username || "User"}
                          />
                          <AvatarFallback className="bg-primary/10 text-primary font-black uppercase">
                            {user?.username?.[0] || "U"}
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-black">
                            {user?.firstName} {user?.lastName}
                          </span>
                          <span className="truncate text-xs text-muted-foreground">
                            @{user?.username}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator className="bg-border" />
                    <DropdownMenuItem
                      onClick={() => setIsProfileOpen(true)}
                      className="cursor-pointer font-bold gap-2 p-3"
                    >
                      <User className="size-4" />
                      My Account
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-border" />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer font-bold gap-2 p-3"
                    >
                      <LogOut className="size-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <ThemeToggle />
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
      <UserProfileDialog
        isOpen={isProfileOpen}
        onClose={setIsProfileOpen}
        user={user}
      />
    </Sidebar>
  );
}
