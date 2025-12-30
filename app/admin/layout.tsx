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
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (!user) {
      router.push("/");
      return;
    }

    if (user.role !== "admin") {
      router.push("/");
      return;
    }

    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-background z-[100]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mb-4"
            >
              <Loader2 className="h-10 w-10 text-primary" />
            </motion.div>
            <p className="text-sm font-medium text-muted-foreground animate-pulse uppercase tracking-wider">
              Initializing Admin Workspace...
            </p>
          </motion.div>
        ) : (
          <SidebarProvider key="content" defaultOpen={true}>
            <AppSidebar role="admin" />
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
                  {children}
                </main>
              </motion.div>
            </SidebarInset>
          </SidebarProvider>
        )}
      </AnimatePresence>
    </div>
  );
}
