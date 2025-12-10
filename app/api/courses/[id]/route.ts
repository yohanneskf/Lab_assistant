import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// PATCH request to update a course
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();
  const updatedCourse = await prisma.course.update({
    where: { id },
    data,
  });
  return NextResponse.json(updatedCourse);
}

// DELETE request to delete (deactivate) a course
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await prisma.course.update({
    where: { id },
    data: { isActive: false },
  });
  return NextResponse.json({ message: "Course deactivated successfully" });
}
