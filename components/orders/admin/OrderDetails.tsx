import { Card } from "@/components/ui/card";
import React from "react";

interface OrderDetailsProps {
  order: Order;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  const formattedDate = new Date(order.created_at).toLocaleDateString();
  
  return (
    <ul className="flex flex-col gap-2 md:flex-[2]">
      <li>Ordered on: {formattedDate}</li>
      <li>Total Price: ${order.total_amount * 0.01}.00</li>
      <li>Payment Received: {order.payment_received ? "Paid" : "Unpaid"}</li>
      <li>Delivery Address: {order.delivery_address}</li>
      <li>
        Delivered on:{" "}
        {order.delivered_at ? order.delivered_at : "Not Yet Delivered"}
      </li>
    </ul>
  );
}
