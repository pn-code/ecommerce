import { isCurrentUserAdmin } from "@/helpers/isCurrentUserAdmin";
import { prisma } from "@/lib/db";
import { ProductSchema } from "@/schemas/ProductSchema";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

import { stripe } from "@/lib/stripeClient";

export async function POST(req: NextRequest) {
  try {
    const admin = await isCurrentUserAdmin();

    if (!admin) {
        return NextResponse.json("Unauthorized", { status: 401 })
    }

    // Validate product data
    const data = await req.json();
    ProductSchema.parse(data);

    // Create product in our database
    const product = await prisma.product.create({
      data,
    });

    // Create product in stripe
    await stripe.products.create({
      id: product.id,
      name: product.name,
      description: product.description,
      images: [product.imageUrl],
      default_price_data: {
        unit_amount: product.price,
        currency: "usd",
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: any) {
    if (typeof ZodError) {
      console.error(error);
      return NextResponse.json("USER ERROR", { status: 400 });
    } else {
      console.error("COLLECTIONS POST:", error.message);
      return NextResponse.json("SERVER ERROR", { status: 500 });
    }
  }
}
