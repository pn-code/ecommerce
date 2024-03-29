"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const productsOrdered = order.orderItems.map(
    (item: any) => item.product.name
  );

  const orderDate = new Date(order.created_at);
  const paymentReceived = order.payment_received;

  return (
    <Card className="flex w-full flex-col">
      <CardHeader className="flex flex-col gap-1 w-full px-3 md:px-4">
        <CardTitle className="flex justify-between gap-4">
          <h3>Order #{order.id}</h3>
          <div className="flex gap-2 items-center">
            <h3
              className={cn(
                "text-xs py-0.5 px-3 rounded-full text-white",
                order.delivery_status === "PROCESSING" && "bg-blue-500",
                order.delivery_status === "SHIPPING" && "bg-indigo-600",
                order.delivery_status === "DELIVERED" && "bg-red-600",
                order.delivery_status === "CANCELLED" && "bg-gray-600"
              )}
            >
              {order.delivery_status}
            </h3>
            <p className="font-semibold">${order.total_amount * 0.01} USD</p>
          </div>
        </CardTitle>
        <CardDescription className="flex justify-between items-center">
          {productsOrdered.join(", ")}
        </CardDescription>
      </CardHeader>

      <CardFooter className="text-sm w-full flex flex-col md:flex-row items-start md:justify-between md:items-end px-3 md:px-4">
        <div className="font-semibold">
          <p
            className={cn(
              "",
              paymentReceived ? "text-blue-500" : "text-red-500"
            )}
          >
            Payment Received: {order.payment_received ? "True" : "False"}
          </p>
        </div>

        <p>Ordered on {orderDate.toLocaleDateString()}</p>
      </CardFooter>
    </Card>
  );
}
