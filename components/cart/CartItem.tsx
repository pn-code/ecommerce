"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface CartCardProps {
  cartItem: CartItem;
}

export default function CartCard({ cartItem }: CartCardProps) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const deleteCart = async () => {
    try {
      setLoading(true);

      const res = await axios.delete(`/api/carts/${cartItem.id}`);

      if (res.status === 200) {
        toast.success(
          `Successfully removed ${cartItem.product.name} from cart.`
        );
        router.refresh();
      }
    } catch (error: any) {
      console.error("CARTS/DELETE: ", error.message);
      toast.error("We ran into an error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="flex w-full flex-col md:flex-row md:items-center">
      <div className="flex justify-center items-center">
        <div className="w-full h-52 md:w-36 md:h-36 relative">
          <Image
            className="p-4 object-scale-down"
            src={cartItem.product.imageUrl}
            alt={cartItem.product.name}
            fill
          />
        </div>
      </div>

      <CardHeader className="flex flex-col gap-1 w-full">
        <CardTitle className="flex justify-between gap-4">
          <h3 className="w-44 md:w-[600px]">{cartItem.product.name}</h3>
          <div className="mr-1.5">${cartItem.total_price * 0.01} USD</div>
        </CardTitle>
        <CardDescription className="flex justify-between items-center">
          Quantity: {cartItem.quantity}
          <div className="flex justify-end">
            <Button className="mr-0" onClick={deleteCart} variant="destructive">
              Remove
            </Button>
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
