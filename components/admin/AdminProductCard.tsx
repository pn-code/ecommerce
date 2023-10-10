import React from "react";
import {
  Card,
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
    <Card className="flex w-full flex-col md:flex-row">
      <div className="flex justify-center items-center">
        <div className="w-full h-52 md:w-36 md:h-36 relative">
          <Image
            className="p-4 object-scale-down"
            src={product.imageUrl}
            alt={product.name}
            fill
          />
        </div>
      </div>

      <CardHeader className="flex flex-col gap-1 w-full">
        <CardTitle className="flex justify-between">
          <h3>{product.name}</h3>
          <div>${product.price * 0.01}.00 USD</div>
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
