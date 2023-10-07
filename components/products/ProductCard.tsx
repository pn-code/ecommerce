import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  categoryId: number;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  imageUrl,
  categoryId,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="md:w-[300px] w-full">
      <Card className="h-[200px] hover:bg-slate-100 cursor-pointer">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <Image src={imageUrl} alt="" width={200} height={200}/> */}
          <p>${price}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
