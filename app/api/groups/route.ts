import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// Add the GET function to retrieve all groups
export async function GET() {
  try {
    const groups = await prisma.group.findMany({
      where: {
        isActive: true,
      },
    });
    return NextResponse.json(groups);
  } catch (error) {
    console.error("Failed to fetch groups:", error);
    return NextResponse.json(
      { error: "Failed to fetch groups" },
      { status: 500 }
    );
  }
}

// Your existing POST function
export async function POST(req: Request) {
  const data = await req.json();
  const group = await prisma.group.create({
    data: { ...data, isActive: true },
  });
  return NextResponse.json(group);
}
