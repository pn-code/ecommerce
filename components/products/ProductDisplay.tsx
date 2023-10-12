"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";

interface ProductDisplayProps {
  product: Product;
}

export default function ProductDisplay({ product }: ProductDisplayProps) {
  const [quantity, setQuantity] = useState<number>(1);

  const addProductToCart = async () => {};

  return (
    <div className="w-full h-full flex flex-col">
      <Card className="w-full h-full md:h-[calc(100vh-160px)] pb-4 md:flex md:items-center">
        <CardHeader className="w-full flex justify-between p-0 md:p-6">
          <div className="flex justify-center items-center mb-3">
            <div className="w-full h-64 md:h-[600px] relative">
              <Image
                className="object-cover rounded-t-md md:rounded-md"
                src={product.imageUrl}
                alt={product.name}
                fill
              />
            </div>
          </div>
        </CardHeader>

        <div className="flex flex-col h-full w-full pt-[12%] gap-4">
          <CardContent className="space-y-3">
            <CardTitle className="md:text-xl">{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardContent>

          {/* Counter and Add to Cart Button */}
          <CardFooter className="w-full flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <label className="font-semibold" htmlFor="quantity">
                Quantity:
              </label>
              <Input
                className="w-12"
                onChange={(e) => setQuantity(Number(e.target.value))}
                value={quantity}
                id="quantity"
                type="number"
              />
            </div>

            <Button>Add To Cart</Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}
