"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthService } from "@/lib/auth";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground selection:bg-green-500/20">
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
              <Loader2 className="h-10 w-10 text-green-600" />
            </motion.div>
            <p className="text-sm font-medium text-muted-foreground animate-pulse">
              Loading your portal...
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <main className="py-10 px-4 sm:px-8 lg:px-12">{children}</main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
