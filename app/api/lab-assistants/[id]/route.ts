import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

// PATCH request to update a lab assistant
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const data = await request.json();

  if (data.password) {
    // If a password is being updated, hash it first
    data.password = await bcrypt.hash(data.password, 10);
  }

  // Update both the LabAssistant and User records in a transaction
  const [updatedLabAssistant, updatedUser] = await prisma.$transaction([
    prisma.labAssistant.update({ where: { id }, data }),
    prisma.user.update({
      where: { email: data.email },
      data: { password: data.password },
    }),
  ]);

  return NextResponse.json(updatedLabAssistant);
}

// DELETE request to delete a lab assistant and their user account
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Find the assistant to get the email for the user account
  const assistant = await prisma.labAssistant.findUnique({ where: { id } });

  if (!assistant) {
    return NextResponse.json(
      { message: "Assistant not found" },
      { status: 404 }
    );
  }

  // Use a transaction to ensure both records are deleted
  await prisma.$transaction([
    prisma.labAssistant.delete({ where: { id } }),
    prisma.user.delete({ where: { email: assistant.email } }),
  ]);

  return NextResponse.json({
    message: "Assistant and user account deleted successfully",
  });
}
