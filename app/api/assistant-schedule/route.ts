import { NextResponse } from "next/server";
import prisma from "@/prisma/client"; // Use @/lib/prisma, as in your previous code

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const labAssistantId = searchParams.get("labAssistantId");

  if (!labAssistantId) {
    return NextResponse.json(
      { message: "Missing labAssistantId" },
      { status: 400 }
    );
  }

  try {
    // Fetch the lab assistant details
    const assistant = await prisma.labAssistant.findUnique({
      where: { labAssistantId },
    });

    if (!assistant) {
      return NextResponse.json(
        { message: "Lab assistant not found" },
        { status: 404 }
      );
    }

    // Corrected: Fetch the schedules for *this specific assistant*
    const schedules = await prisma.scheduleAssignment.findMany({
      where: {
        labAssistantId: labAssistantId, // This is the crucial filter you were missing
        status: "active",
      },
      include: {
        course: true,
        labRoom: true,
        timeSlot: true,
        section: true,
        group: true,
      },
      orderBy: {
        timeSlot: {
          startTime: "asc",
        },
      },
    });

    // We don't need to include labAssistant in the schedule details,
    // as we already have the full assistant object. This simplifies the payload.
    return NextResponse.json({ assistant, schedules });
  } catch (error) {
    console.error("Failed to fetch assistant schedule:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// POST request to create a new schedule assignment
export async function POST(request: Request) {
  try {
    const {
      courseId,
      sectionId,
      groupId,
      labRoomId,
      timeSlotId,
      status,
      userEmail,
    } = await request.json();

    // 1. Find the authenticated user to get their labAssistantId
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user || !user.labAssistantId) {
      return NextResponse.json(
        { message: "User not authorized or Lab Assistant ID not found" },
        { status: 403 }
      );
    }

    // 2. Create the new schedule assignment using the user's labAssistantId
    const newSchedule = await prisma.scheduleAssignment.create({
      data: {
        courseId,
        sectionId,
        groupId,
        labRoomId,
        timeSlotId,
        status,
        labAssistantId: user.labAssistantId,
      },
    });
    return NextResponse.json(newSchedule, { status: 201 });
  } catch (error) {
    console.error("Failed to create schedule:", error);
    return NextResponse.json(
      { error: "Failed to create schedule" },
      { status: 500 }
    );
  }
}
