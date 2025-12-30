import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export interface AuthUser {
  id: string;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  role: "admin" | "lab_assistant";
  labAssistantId?: string;
}

export class AuthService {
  private static SESSION_KEY = "lab_management_session";

  // This is the updated login method that handles all roles
  static async login(
    email: string,
    password: string
  ): Promise<AuthUser | null> {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        return null; // Server will send a 401 for invalid credentials
      }

      const authUser: AuthUser = await response.json();

      localStorage.setItem(this.SESSION_KEY, JSON.stringify(authUser));
      return authUser;
    } catch (error) {
      console.error("AuthService.login error:", error);
      return null;
    }
  }

  static logout(): void {
    if (typeof window === "undefined") return;
    localStorage.removeItem(this.SESSION_KEY);
  }

  static getCurrentUser(): AuthUser | null {
    if (typeof window === "undefined") return null;
    const session = localStorage.getItem(this.SESSION_KEY);
    return session ? JSON.parse(session) : null;
  }

  static isAuthenticated(): boolean {
    return this.getCurrentUser() !== null;
  }

  static isAdmin(): boolean {
    const user = this.getCurrentUser();
    return user?.role === "admin";
  }

  static isLabAssistant(): boolean {
    const user = this.getCurrentUser();
    return user?.role === "lab_assistant";
  }
}
