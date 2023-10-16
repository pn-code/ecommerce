"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface CartCheckoutProps {
  carts: CartItem[];
}

export default function CartCheckout({ carts }: CartCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const createCheckoutSession = async () => {
    try {
      setLoading(true);
      const ordersRes = await axios.post("/api/orders");

      if (ordersRes.status !== 201)
        throw new Error("Something went wrong when creating new order.");

      const checkoutRes = await axios.post("/api/checkout_sessions", {
        orderId: ordersRes.data.id,
        carts,
      });

      if (checkoutRes.status !== 201)
        throw new Error(
          "Something went wrong when creating new checkout session."
        );

      const cartsRes = await axios.delete("/api/carts");

      if (cartsRes.status === 200) {
        router.push(checkoutRes.data.url);
      }
    } catch (error: any) {
      console.error("CHECKOUT ERROR", error.message);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      onClick={createCheckoutSession}
      className="w-full"
    >
      Check out
    </Button>
  );
}
