"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, Eye, EyeOff, Key } from "lucide-react"; // Added Key icon
import { AuthService } from "@/lib/auth";
import Link from "next/link";

export default function ChangePasswordPage() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const user = AuthService.getCurrentUser();
    if (!user || !user.labAssistantId) {
      setMessage({
        type: "error",
        text: "User not found. Please log in again.",
      });
      setIsLoading(false);
      return;
    }

    // Validate new password
    if (formData.newPassword.length < 6) {
      setMessage({
        type: "error",
        text: "New password must be at least 6 characters long.",
      });
      setIsLoading(false);
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match." });
      setIsLoading(false);
      return;
    }

    // Prevent changing password to the same one (optional, but good UX)
    if (formData.currentPassword === formData.newPassword) {
      setMessage({
        type: "error",
        text: "New password cannot be the same as the current password.",
      });
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/assistant/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          labAssistantId: user.labAssistantId,
          currentPassword: formData.currentPassword,
          newPassword: formData.newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: result.message });
        setFormData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        // Redirect to dashboard after 2 seconds
        setTimeout(() => {
          router.push("/assistant");
        }, 2000);
      } else {
        setMessage({
          type: "error",
          text: result.message || "An error occurred. Please try again.",
        });
      }
    } catch (error) {
      console.error("Password change API error:", error);
      setMessage({
        type: "error",
        text: "Network or server error. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field: keyof typeof showPasswords) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        {" "}
        {/* Increased max-width and shadow */}
        <CardHeader className="space-y-1 border-b pb-4">
          <div className="flex items-center space-x-2">
            <Link href="/assistant" passHref>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-green-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <CardTitle className="text-3xl font-bold text-gray-800 flex items-center">
                <Key className="h-6 w-6 mr-2 text-green-600" />
                Change Password
              </CardTitle>
              <CardDescription className="text-gray-500 mt-1">
                Ensure your account is secure by setting a new strong password.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Current Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="currentPassword"
                className="font-semibold text-gray-700"
              >
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  type={showPasswords.current ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentPassword: e.target.value,
                    })
                  }
                  placeholder="Enter your current password"
                  required
                  className="pr-10 focus-visible:ring-green-500 focus-visible:ring-2"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-green-600 transition-colors"
                  onClick={() => togglePasswordVisibility("current")}
                >
                  {showPasswords.current ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* New Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="newPassword"
                className="font-semibold text-gray-700"
              >
                New Password (Min 6 characters)
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  type={showPasswords.new ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, newPassword: e.target.value })
                  }
                  placeholder="Enter a new password"
                  required
                  className="pr-10 focus-visible:ring-green-500 focus-visible:ring-2"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-green-600 transition-colors"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showPasswords.new ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Confirm New Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="font-semibold text-gray-700"
              >
                Confirm New Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showPasswords.confirm ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm the new password"
                  required
                  className="pr-10 focus-visible:ring-green-500 focus-visible:ring-2"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 text-gray-500 hover:text-green-600 transition-colors"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showPasswords.confirm ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Message Alert */}
            {message && (
              <Alert
                className={`shadow-sm ${
                  message.type === "error"
                    ? "border-red-400 bg-red-50"
                    : "border-green-400 bg-green-50"
                }`}
              >
                <AlertDescription
                  className={`font-medium ${
                    message.type === "error" ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 transition duration-150 py-2 text-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Key className="animate-spin h-5 w-5 mr-2" /> Saving
                  Changes...
                </>
              ) : (
                "Change Password"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
