"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";
import { AdminSidebar } from "@/components/admin-sidebar";
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
            <p className="text-sm font-medium text-muted-foreground animate-pulse">
              Preparing your dashboard...
            </p>
          </motion.div>
        ) : (
          <div key="content" className="flex">
            <AdminSidebar />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 lg:pl-72"
            >
              <main className="min-h-screen py-10 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto">
                {children}
              </main>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
