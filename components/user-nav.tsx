"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User } from "lucide-react";
import { AuthService } from "@/lib/auth";
import { UserProfileDialog } from "@/components/user-profile-dialog";

export function UserNav() {
  const router = useRouter();
  const user = AuthService.getCurrentUser();
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);

  const handleLogout = () => {
    AuthService.logout();
    router.push("/");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-9 w-9 rounded-xl">
            <Avatar className="h-9 w-9 border-2 border-primary/20">
              <AvatarImage src={undefined} alt={user?.username || "User"} />
              <AvatarFallback className="bg-primary/10 text-primary font-black uppercase text-xs">
                {user?.username?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 rounded-xl shadow-2xl border-border bg-card/80 backdrop-blur-xl"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-black leading-none">
                {user?.firstName} {user?.lastName}
              </p>
              <p className="text-xs leading-none text-muted-foreground uppercase opacity-70">
                @{user?.username}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setIsProfileOpen(true)}
            className="cursor-pointer font-bold gap-2"
          >
            <User className="mr-2 h-4 w-4" />
            <span>My Account</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={handleLogout}
            className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer font-bold gap-2"
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <UserProfileDialog
        isOpen={isProfileOpen}
        onClose={setIsProfileOpen}
        user={user}
      />
    </>
  );
}
