import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface AdminProductCardProps {
  product: any;
}

export default function AdminProductCard({ product }: AdminProductCardProps) {
  return (
    <Card className="flex">
      <Image
        className="p-4"
        src={product.imageUrl}
        alt={product.name}
        height={100}
        width={100}
      />

      <CardHeader className="flex flex-col gap-1">
        <CardTitle className="flex justify-between">
          <h3>{product.name}</h3>
          <div>${product.price * .01}.00 USD</div>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>

      <CardContent></CardContent>
    </Card>
  );
}
