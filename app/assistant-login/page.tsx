"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AuthService } from "@/lib/auth";
import { Users, ArrowLeft, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function AssistantLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const user = await AuthService.login(email, password);

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      if (user.role.toLowerCase() !== "lab_assistant") {
        await AuthService.logout();
        setError("Access denied. Assistant credentials required.");
        return;
      }

      router.push("/assistant");
    } catch (err) {
      console.error("[handleSubmit] Error:", err);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 -left-4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full relative z-10"
      >
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-green-600 transition-colors mb-8 group"
        >
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: -4 }}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to options
          </motion.div>
        </Link>

        <Card className="border-border bg-card/50 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-green-500 w-full" />
          <CardHeader className="text-center space-y-1 pt-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4"
            >
              <Users className="h-8 w-8 text-green-600" />
            </motion.div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              Assistant Portal
            </CardTitle>
            <CardDescription className="text-base text-muted-foreground">
              Sign in to view your lab schedules
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <AnimatePresence mode="wait">
                {error && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <Alert
                      variant="destructive"
                      className="bg-destructive/10 border-destructive/20 text-destructive"
                    >
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="assistant@lab.edu"
                      required
                      className="pl-10 h-11 transition-all focus:ring-2 focus:ring-green-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      className="pl-10 h-11 transition-all focus:ring-2 focus:ring-green-500/20"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-green-600 hover:bg-green-700 text-white text-base font-semibold transition-all hover:shadow-lg active:scale-[0.98]"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="mr-2"
                    >
                      <Users className="h-4 w-4" />
                    </motion.div>
                    Authenticating...
                  </span>
                ) : (
                  "Sign In to Portal"
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Need help? Contact your administrator.
              </p>
              <div className="inline-flex items-center space-x-2 text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>System Status: Operational</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
