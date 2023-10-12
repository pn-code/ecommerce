"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

interface ProductDisplayProps {
  product: Product;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const addProductToCart = async () => {

  }

  return (
    <div className="flex flex-col">
      <Card className="pb-4">
        <CardHeader className="m-0 p-0">
          <div className="flex justify-center items-center mb-3">
            <div className="w-full h-64 md:h-44 relative">
              <Image
                className="object-cover rounded-t-md"
                src={product.imageUrl}
                alt={product.name}
                fill
              />
            </div>
          </div>
          <CardTitle className="p-2 pb-4">{product.name}</CardTitle>
          <CardDescription className="p-2 pb-4">
            {product.description}
          </CardDescription>
        </CardHeader>

        {/* Counter and Add to Cart Button */}
        <CardContent className="w-full flex justify-between items-center p-2">
          <div className="flex gap-2 items-center">
            <label className="font-semibold" htmlFor="quantity">Quantity:</label>
            <Input
              className="w-12"
              onChange={(e) => setQuantity(Number(e.target.value))}
              id="quantity"
              type="number"
            />
          </div>

          <Button>Add To Cart</Button>
        </CardContent>
      </Card>
    </div>
  );
}
