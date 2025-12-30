"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { motion } from "framer-motion";
import { PageSkeleton } from "@/components/page-skeleton";

export default function AssistantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (!user || user.role !== "lab_assistant") {
      router.push("/assistant-login");
      return;
    }

    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SidebarProvider defaultOpen={true}>
        <AppSidebar role="assistant" />
        <SidebarInset className="relative flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 px-4 transition-[width,height] ease-linear bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
            <SidebarTrigger className="-ml-1" />
            <div className="h-8 w-px bg-border mx-2" />
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <span className="hidden sm:inline">
                Laboratory Management System
              </span>
              <span className="sm:hidden">LMS</span>
            </div>
          </header>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col flex-1"
          >
            <main className="flex-1 py-8 px-4 sm:px-8 lg:px-12 w-full max-w-7xl mx-auto">
              {isLoading ? <PageSkeleton /> : children}
            </main>
          </motion.div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
