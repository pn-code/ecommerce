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
    const res = await axios.post("/api/checkout_sessions", carts);
    
    if (res.status === 200) {
      router.push(res.data.url)
    }
  };

  return (
    <Button onClick={createCheckoutSession} className="w-full">
      Check out
    </Button>
  );
}
