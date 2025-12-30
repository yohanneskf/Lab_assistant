"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
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
          <AppHeader />
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
