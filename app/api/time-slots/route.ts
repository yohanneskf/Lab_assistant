// File: app/api/time-slots/route.ts

import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { type TimeSlot } from "@/types/type";

export async function GET() {
  const timeSlots = await prisma.timeSlot.findMany();
  return NextResponse.json(timeSlots);
}

export async function POST(request: Request) {
  const data: Omit<TimeSlot, "id" | "createdAt" | "updatedAt"> =
    await request.json();

  // The 'isActive' field is no longer needed here due to the schema change.
  // Prisma will automatically use the default value.

  const newTimeSlot = await prisma.timeSlot.create({ data });
  return NextResponse.json(newTimeSlot);
}
