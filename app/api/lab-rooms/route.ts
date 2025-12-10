import { NextResponse } from "next/server";
import prisma from "@/prisma/client";
// GET request to fetch all lab rooms
export async function GET() {
  const labRooms = await prisma.labRoom.findMany({
    where: { isActive: true },
  });
  return NextResponse.json(labRooms);
}

// POST request to create a new lab room
export async function POST(request: Request) {
  const { name, capacity, location, equipment } = await request.json();
  const newLabRoom = await prisma.labRoom.create({
    data: {
      name,
      capacity: Number(capacity),
      location,
      equipment,
      isActive: true,
    },
  });
  return NextResponse.json(newLabRoom);
}
