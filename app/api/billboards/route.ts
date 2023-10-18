import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { prisma } from "@/lib/db";
import { BillboardSchema } from "@/schemas/BillboardSchema";
import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";

export async function POST(req: NextRequest) {
  try {
    const admin = await isCurrentUserAdmin();

    if (!admin) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    // Validate billboard data
    const data = await req.json();
    BillboardSchema.parse(data);

    // Create product in our database
    const billboard = await prisma.billboard.create({
      data,
    });

    return NextResponse.json(billboard, { status: 201 });
  } catch (error: any) {
    if (typeof ZodError) {
      console.error(error);
      return NextResponse.json("USER ERROR", { status: 400 });
    } else {
      console.error("BILLBOARD/POST: ", error.message);
      return NextResponse.json("SERVER ERROR", { status: 500 });
    }
  }
}
