"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

interface UserProfileDialogProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
  user: any;
}

export function UserProfileDialog({
  isOpen,
  onClose,
  user,
}: UserProfileDialogProps) {
  if (!user) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader className="flex flex-col items-center gap-4 pb-4 border-b">
          <div className="h-24 w-24 p-1 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center">
            <Avatar className="h-full w-full">
              <AvatarImage src={undefined} alt={user.username} />
              <AvatarFallback className="bg-transparent text-primary text-3xl font-black uppercase">
                {user.username?.[0] || "U"}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center space-y-1">
            <DialogTitle className="text-2xl font-black">
              {user.firstName} {user.lastName}
            </DialogTitle>
            <DialogDescription className="font-medium text-primary">
              @{user.username}
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                System Role
              </Label>
              <div className="flex">
                <Badge
                  variant="outline"
                  className="font-bold border-primary/20 bg-primary/5 text-primary"
                >
                  {user.role === "admin" ? "Administrator" : "Lab Assistant"}
                </Badge>
              </div>
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                Status
              </Label>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-foreground">
                  Active
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t">
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase text-muted-foreground tracking-wider">
                Account ID
              </Label>
              <p className="font-mono text-sm bg-muted p-2 rounded-md border border-border/50">
                {user.id || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
