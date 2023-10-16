"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

interface CartCheckoutProps {
  carts: CartItem[];
}

export default function CartCheckout({ carts }: CartCheckoutProps) {
  const router = useRouter();

  const createCheckoutSession = async () => {
    const ordersRes = await axios.post("/api/orders", carts);

    if (ordersRes.status !== 201) throw new Error("Something went wrong when creating new order.")

    const checkoutRes = await axios.post("/api/checkout_sessions", carts);
    
    if (checkoutRes.status === 201) {
      router.push(checkoutRes.data.url)
    }
  };

  return (
    <Button onClick={createCheckoutSession} className="w-full">
      Check out
    </Button>
  );
}
