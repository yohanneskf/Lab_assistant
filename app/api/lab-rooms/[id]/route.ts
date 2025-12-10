import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// PATCH request to update a lab room
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();
  const updatedLabRoom = await prisma.labRoom.update({
    where: { id },
    data,
  });
  return NextResponse.json(updatedLabRoom);
}

// DELETE request to delete (or in your case, deactivate) a lab room
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.labRoom.update({
    where: { id },
    data: { isActive: false },
  });
  return NextResponse.json({ message: "Lab room deactivated successfully" });
}
