import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripeClient";
import { currentUser } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Check for user and reject if no user is found
    const user = await currentUser();

    if (!user) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    // Verify the product and cart details
    const data = await req.json();

    // Find the product
    const product = await prisma.product.findFirst({
      where: { id: data.product_id },
    });

    const stripeProduct = await stripe.products.retrieve(String(product!.id));

    if (!product || !stripeProduct) {
      return NextResponse.json("Unauthorized", { status: 401 });
    }

    // Create the cart
    const cart = await prisma.cart.create({
      data: {
        user_id: user.id,
        product_id: product.id,
        quantity: data.quantity,
        unit_price: product.price,
        total_price: product.price * data.quantity,
        price_id: stripeProduct.default_price,
      },
    });

    return NextResponse.json(cart, { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json("Server Error", { status: 500 });
  }
}
