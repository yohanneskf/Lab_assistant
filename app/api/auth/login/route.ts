import prisma from "@/prisma/client";

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find the user by email in your database
    const user = await prisma.user.findUnique({
      where: { email },
    });
    const alluser = await prisma.user.findMany();
    console.log("All users in DB:", alluser);
    console.log("User found:", user);
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Compare the plain text password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Return a subset of user data (excluding the password)
    // The client-side code will expect this format
    const userData = {
      id: user.id,
      email: user.email,
      role: user.role as "admin" | "lab_assistant", // Cast to match AuthUser type
      labAssistantId: user.labAssistantId,
    };

    return NextResponse.json(userData, { status: 200 });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
