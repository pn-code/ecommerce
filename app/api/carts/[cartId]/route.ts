import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  { params }: { params: { cartId: string } }
) {
  try {
    const user = await currentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    if (!params.cartId) {
      return NextResponse.json("Bad Request", { status: 400 });
    }

    const cart = await prisma.cart.delete({
      where: {
        id: Number(params.cartId),
        user_id: user.id,
      },
    });

    return NextResponse.json(cart, { status: 200 });
  } catch (error: any) {
    console.error("CART/DELETE:", error.message);
    return NextResponse.json("SERVER ERROR", { status: 500 });
  }
}
