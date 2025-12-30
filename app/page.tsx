"use client";

import { useEffect } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initializeDefaultData } from "@/lib/local-storage";
import { UserCog, Users, Beaker } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  useEffect(() => {
    initializeDefaultData();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full z-10"
      >
        <div className="text-center mb-12">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6"
          >
            <Beaker className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-4"
          >
            Lab Management{" "}
            <span className="text-primary font-extrabold">System</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto"
          >
            Streamline your laboratory operations with our professional
            management platform. Choose your portal below to get started.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* --- Admin Card --- */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/admin-login" className="block group h-full">
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm group-hover:border-primary/50 group-hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center p-8">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <UserCog className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">
                    Admin Portal
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Comprehensive management of lab rooms, courses, assistants,
                    and global schedules.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>

          {/* --- Assistant Card --- */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/assistant-login" className="block group h-full">
              <Card className="h-full border-border bg-card/50 backdrop-blur-sm group-hover:border-green-500/50 group-hover:shadow-2xl transition-all duration-300">
                <CardHeader className="text-center p-8">
                  <div className="mx-auto w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
                    <Users className="h-8 w-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-2xl font-bold mb-3">
                    Assistant Portal
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    Access your personalized lab schedules and manage your daily
                    sessions with ease.
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center text-sm text-muted-foreground"
        >
          © {new Date().getFullYear()} Lab Management System. All rights
          reserved.
        </motion.div>
      </motion.div>
    </div>
  );
}
