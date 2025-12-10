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
import { UserCog, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
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
      const user = await AuthService.login(email, password); // ✅ add await

      console.log("[handleSubmit] Logged in user:", user);

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      if (user.role !== "admin") {
        setError("Access denied. Admin credentials required.");
        return;
      }

      router.push("/admin");
    } catch (err) {
      console.error("[handleSubmit] Error:", err);
      setError("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // 1. Updated Background: Slightly darker neutral background and vertical padding
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      {/* 2. Content Container: Added white background, padding, and a strong shadow */}
      <div className="max-w-md w-full p-6 sm:p-8 space-y-8 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          {/* 3. Back Link Style */}
          <Link
            href="/"
            className="inline-flex items-center text-base text-gray-500 hover:text-blue-600 transition duration-150 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to login options
          </Link>

          {/* 4. Enhanced Icon Container: Larger, more saturated color, and white icon */}
          <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <UserCog className="h-8 w-8 text-white" />
          </div>

          {/* 5. Heading Styles */}
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Admin Login
          </h1>
          <p className="mt-2 text-lg text-gray-500">
            Sign in to access the admin dashboard
          </p>
        </div>

        {/* 6. Card Style: Removed redundant shadow/border since the container already has it */}
        <Card className="shadow-none border-none">
          <CardHeader className="pt-0">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-500">
              Enter your admin credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                // 7. Alert Style: Added a subtle shadow to the alert
                <Alert variant="destructive" className="shadow-sm">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="font-semibold text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  // 8. Input Focus Style: Clearer focus ring
                  className="focus-visible:ring-blue-500 focus-visible:ring-2"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="font-semibold text-gray-700"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  // 8. Input Focus Style: Clearer focus ring
                  className="focus-visible:ring-blue-500 focus-visible:ring-2"
                />
              </div>

              {/* 9. Button Style: Primary color for a call to action */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 transition duration-150 py-2 text-lg"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 10. Footer Hint Style */}
        <div className="text-center text-sm text-gray-500 p-2 border-t border-gray-200">
          <p className="font-medium">Default admin credentials:</p>
          <p className="font-mono text-xs">
            Email: admin@1234.edu | Password: 1234
          </p>
        </div>
      </div>
    </div>
  );
}
