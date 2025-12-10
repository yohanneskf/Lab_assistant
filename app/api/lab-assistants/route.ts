import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcryptjs";

// GET request to fetch all active lab assistants
export async function GET() {
  const labAssistants = await prisma.labAssistant.findMany({
    where: { isActive: true },
  });
  return NextResponse.json(labAssistants);
}

// POST request to create a new lab assistant and a corresponding user
export async function POST(request: Request) {
  const {
    labAssistantId,
    username,
    firstName,
    lastName,
    email,
    password,
    department,
  } = await request.json();

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Use a transaction to ensure both records are created or neither are
  try {
    const [newLabAssistant, newUser] = await prisma.$transaction([
      // 1. Create the new LabAssistant record
      prisma.labAssistant.create({
        data: {
          labAssistantId,
          username,
          firstName,
          lastName,
          email,
          password: hashedPassword, // Store the hashed password
          department,
          isActive: true,
        },
      }),
      // 2. Create the User record and link it to the LabAssistant
      prisma.user.create({
        data: {
          email,
          password: hashedPassword, // Store the hashed password
          role: "lab_assistant",
          // The key change: We use the labAssistantId provided in the request
          // to link the two models.
          labAssistantId: labAssistantId,
        },
      }),
    ]);

    // Return the newly created lab assistant
    return NextResponse.json(newLabAssistant, { status: 201 });
  } catch (error) {
    console.error("Lab assistant creation error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred during creation" },
      { status: 500 }
    );
  }
}
