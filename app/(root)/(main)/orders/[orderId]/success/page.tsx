import { Button } from "@/components/ui/button";
import { updateOrder } from "@/helpers/orders/updateOrder";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface SuccessOrderPageProps {
  params: {
    orderId: string;
  };
}

export default async function SuccessOrderPage({
  params,
}: SuccessOrderPageProps) {
  const orderId = Number(params.orderId);
  const user = await currentUser();

  if (!user) return notFound();

  const updatedOrder = await updateOrder(orderId);

  if (!updatedOrder) throw new Error("Could not update order");

  return (
    <div className="w-full h-full md:h-[calc(100vh-400px)] flex items-center justify-center flex-col gap-4 pt-5">
      <p className="md:text-lg font-semibold w-full text-center">
        Your order has been placed!
      </p>

      <div className="flex gap-2">
        <Button variant="ghost">
          <Link href="/">Return Home</Link>
        </Button>
        <Button>
          <Link href="/orders">View Orders</Link>
        </Button>
      </div>
    </div>
  );
}
