import Link from "next/link";
import React from "react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  collectionName: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  collectionName,
}: ProductCardProps) {
  return (
    <Link href={`/products/product/${id}`} className="w-full md:w-[340px]">
      <Card className="w-full h-[500px] hover:bg-slate-100 cursor-pointer flex flex-col justify-between">
        <CardHeader>
          <div className="flex justify-center items-center">
            <div className="w-full md:h-44 relative">
              <Image
                className="p-4 object-cover"
                src={imageUrl}
                alt={name}
                fill
              />
            </div>
          </div>
          <CardTitle className="pb-1">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-end text-lg font-semibold justify-end">
          {/* <Image src={imageUrl} alt="" width={200} height={200}/> */}
          <p>${price * .01} USD</p>
          <p className="text-sm text-slate-700">{collectionName}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
