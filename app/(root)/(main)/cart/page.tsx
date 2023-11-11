import type { Metadata } from "next";

import CartItem from "@/components/cart/CartItem";
import { getCarts } from "@/helpers/carts/getCarts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import CartCheckout from "@/components/cart/CartCheckout";

export const metadata: Metadata = {
  title: "Your Cart | Uncle Ben's Meat Factory ",
};

export default async function CartPage() {
  const carts = (await getCarts()) as CartItem[];

  if (!carts) {
    throw new Error("Could not fetch carts");
  }

  const cartTotal = carts.reduce(
    (total, cartItem) => total + cartItem.total_price,
    0
  );

  return (
    <div className="w-full h-full flex flex-col gap-4 md:px-8 p-2">
      <header>
        <h2 className="font-semibold md:text-lg">Your Cart</h2>
      </header>

      <div className="w-full h-full flex flex-col md:flex-row gap-4">
        {/* Cart Wrapper */}
        <section className="h-full w-full flex flex-col gap-2 md:flex-[3]">
          {carts.length === 0 ? (
            <p>No items found in cart.</p>
          ) : (
            carts.map((cart) => <CartItem key={cart.id} cartItem={cart} />)
          )}
        </section>

        {/* Totals */}
        <Card className="w-full h-full md:flex-1">
          <CardHeader>
            <h2 className="font-semibold">Cart Details</h2>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold">Total: </h3>
            <span className="text-slate-700">${cartTotal * 0.01}.00 USD</span>
          </CardContent>
          <CardFooter className="w-full">
            <CartCheckout carts={carts} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
