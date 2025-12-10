import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { labAssistantId, currentPassword, newPassword } = await req.json();

    // 1. Find the user record
    const user = await prisma.user.findFirst({
      where: { labAssistantId },
    });

    // Check if user exists
    if (!user) {
      return NextResponse.json({ message: "User not found." }, { status: 404 });
    }

    // 2. Validate the current password
    const isPasswordValid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isPasswordValid) {
      return NextResponse.json(
        { message: "Current password is incorrect." },
        { status: 401 }
      );
    }

    // 3. Hash the new password
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    // 4. Update the password in the database
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedNewPassword, updatedAt: new Date() },
    });

    return NextResponse.json(
      { message: "Password changed successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Change password API error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
