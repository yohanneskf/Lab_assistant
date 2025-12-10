import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

// GET request to fetch all courses
export async function GET() {
  const courses = await prisma.course.findMany({
    where: { isActive: true },
  });
  return NextResponse.json(courses);
}

// POST request to create a new course
export async function POST(request: Request) {
  const data = await request.json();
  const newCourse = await prisma.course.create({ data });
  return NextResponse.json(newCourse);
}
