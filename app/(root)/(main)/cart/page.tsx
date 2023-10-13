import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import React from "react";

async function getCarts() {
  try {
    const user = await currentUser();

    if (!user) throw new Error("Could not find user.");

    const carts = await prisma.cart.findMany({
      where: {
        user_id: user.id,
      },
    });

    return carts;
  } catch (error: any) {
    console.error(error.message);
  }
}

export default async function CartPage() {
  const carts = await getCarts();
  console.log(carts);
  return <div>page</div>;
}
