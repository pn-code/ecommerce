import { Button } from "@/components/ui/button";
import { cancelOrder } from "@/helpers/orders/cancelOrder";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

interface CanceledOrderPageProps {
  params: {
    orderId: string;
  };
}

export default async function CanceledOrderPage({
  params,
}: CanceledOrderPageProps) {
  const user = await currentUser();
  if (!user) return notFound();

  const orderId = Number(params.orderId);

  const canceledOrder = await cancelOrder(orderId);

  if (!canceledOrder) throw new Error("Could not cancel this order.");

  return (
    <div className="w-full h-full md:h-[calc(100vh-400px)] flex items-center justify-center flex-col gap-4 pt-5">
      <p className="md:text-lg font-semibold w-full text-center">
        You have successfully canceled the order.
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
