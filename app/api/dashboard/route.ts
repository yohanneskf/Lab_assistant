import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
  try {
    const [labRooms, courses, assistants, schedules] = await Promise.all([
      prisma.labRoom.count({ where: { isActive: true } }),
      prisma.course.count({ where: { isActive: true } }),
      prisma.labAssistant.count({ where: { isActive: true } }),
      prisma.scheduleAssignment.count({ where: { status: "active" } }),
    ]);

    const stats = {
      labRooms,
      courses,
      assistants,
      schedules,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Failed to fetch dashboard stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}
