import { NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET() {
  const sections = await prisma.section.findMany({
    where: { isActive: true },
    include: {
      Groups: {
        where: { isActive: true },
        select: { id: true, name: true }, // only send needed fields
      },
    },
  });

  // normalize Groups -> groups
  const normalized = sections.map((section: { Groups: any }) => ({
    ...section,
    groups: section.Groups,
  }));

  return NextResponse.json(normalized);
}

export async function POST(req: Request) {
  const data = await req.json();
  const section = await prisma.section.create({
    data: {
      ...data,
      isActive: true,
    },
    include: {
      Groups: {
        where: { isActive: true },
        select: { id: true, name: true },
      },
    },
  });

  // normalize response
  return NextResponse.json({
    ...section,
    groups: section.Groups,
  });
}
