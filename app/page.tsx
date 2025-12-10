"use client";

import { useEffect } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { initializeDefaultData } from "@/lib/local-storage";
import { UserCog, Users } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  useEffect(() => {
    initializeDefaultData();
  }, []);

  return (
    // 1. Updated Background and Padding: Use a slightly darker neutral background and add vertical padding
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
      {/* 2. Increased Max Width and Shadow: Make the container a bit wider and add a subtle shadow */}
      <div className="max-w-md w-full p-6 sm:p-8 space-y-10 bg-white rounded-xl shadow-2xl">
        <div className="text-center">
          {/* 3. Larger and More Prominent Heading */}
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Lab Management System
          </h1>
          {/* 4. Subtitle Style */}
          <p className="mt-3 text-xl text-gray-500 font-medium">
            Choose your login type
          </p>
        </div>

        <div className="space-y-6">
          {/* --- Admin Card --- */}
          {/* 5. Enhanced Hover Effect: Brighter shadow and slight scale on hover, added border */}
          <Card className="border border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
            <Link href="/admin-login" className="block p-4">
              <CardHeader className="text-center">
                {/* 6. Larger, More Contrast Icon Container */}
                <div className="mx-auto w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <UserCog className="h-7 w-7 text-white" />
                </div>
                {/* 7. Card Title Style */}
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Admin Login
                </CardTitle>
                <CardDescription className="text-gray-500 mt-2">
                  Access the admin dashboard to manage lab rooms, courses,
                  assistants, and schedules
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          {/* --- Assistant Card --- */}
          {/* 5. Enhanced Hover Effect: Brighter shadow and slight scale on hover, added border */}
          <Card className="border border-green-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
            <Link href="/assistant-login" className="block p-4">
              <CardHeader className="text-center">
                {/* 6. Larger, More Contrast Icon Container */}
                <div className="mx-auto w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-md">
                  <Users className="h-7 w-7 text-white" />
                </div>
                {/* 7. Card Title Style */}
                <CardTitle className="text-2xl font-semibold text-gray-800">
                  Lab Assistant Login
                </CardTitle>
                <CardDescription className="text-gray-500 mt-2">
                  View your assigned lab schedules and manage your sessions
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
