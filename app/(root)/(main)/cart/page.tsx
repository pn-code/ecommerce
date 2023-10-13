import React from "react";

import CartItem from "@/components/cart/CartItem";
import { getCarts } from "@/helpers/carts/getCarts";

export default async function CartPage() {
  const carts = (await getCarts()) as CartItem[];

  if (!carts) {
    throw new Error("Could not fetch carts");
  }

  return (
    <div>
      {/* Cart Wrapper */}
      <section className="flex flex-col gap-2">
        {carts.length === 0 ? (
          <p>No items found in cart.</p>
        ) : (
          carts.map((cart) => <CartItem key={cart.id} cartItem={cart} />)
        )}
      </section>
    </div>
  );
}
