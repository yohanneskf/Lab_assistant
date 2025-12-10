import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { type TimeSlot } from "@/types/type";

// PATCH request to update a time slot
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data: Partial<TimeSlot> = await request.json();
  const updatedTimeSlot = await prisma.timeSlot.update({
    where: { id },
    data,
  });
  return NextResponse.json(updatedTimeSlot);
}

// DELETE request to delete a time slot
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.timeSlot.delete({ where: { id } });
  return NextResponse.json({ message: "Time slot deleted successfully" });
}
