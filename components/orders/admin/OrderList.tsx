import Link from "next/link";
import React from "react";
import OrderCard from "../OrderCard";

interface OrderListProps {
  orders: Order[];
}

export default function OrderList({ orders }: OrderListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {orders.map((order) => (
        <Link key={order.id} href={`/admin/orders/${order.id}`}>
          <OrderCard order={order} />
        </Link>
      ))}
    </ul>
  );
}
