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

export async function PUT(req: NextRequest) {
  try {
    const admin = await isCurrentUserAdmin();

    if (!admin) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    const data = await req.json();

    BillboardSchema.parse(data);

    console.log(data);

    // Find our billboard
    const currentBillboard = await prisma.billboard.findFirst({
      where: {
        id: data.id,
      },
    });

    console.log(currentBillboard)

    if (!currentBillboard)
      return NextResponse.json("Bad Request", { status: 400 });

    // Did our order change?
    const orderChanged = currentBillboard.order !== data.order;

    // If so, we need to look for any other items with the specific data.order
    if (orderChanged) {
      const otherBillboard = await prisma.billboard.findFirst({
        where: {
          order: data.order,
        },
      });

      if (otherBillboard) {
        return NextResponse.json("Conflict found", { status: 409 });
      }
    }

    // If not, proceed with update
    const updatedBillboard = await prisma.billboard.update({
      where: {
        id: data.id,
      },
      data,
    });

    console.log(updatedBillboard)
    return NextResponse.json(updatedBillboard, { status: 200 });
  } catch (error: any) {
    console.error("BILLBOARDS/PUT: ", error.message);
    return NextResponse.json("SERVER ERROR", { status: 500 });
  }
}
