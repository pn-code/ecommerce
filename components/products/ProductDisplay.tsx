"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User } from "@clerk/nextjs/dist/types/server";
import Link from "next/link";

interface ProductDisplayProps {
    product: Product;
    user: User;
}

export default function ProductDisplay({ product, user }: ProductDisplayProps) {
    const [quantity, setQuantity] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const router = useRouter();

    const createCart = async (productId: number) => {
        try {
            setLoading(true);

            const cart = { product_id: productId, quantity };

            const res = await axios.post("/api/carts", cart);

            if (res.status === 201) {
                toast.success(`${product.name} has been added to cart.`);
                router.refresh();
            }
        } catch (error: any) {
            toast.error("We ran into an error. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

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
                        <CardTitle className="md:text-xl">
                            {product.name}
                        </CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                    </CardContent>

                    {/* Counter and Add to Cart Button */}
                    <CardFooter className="w-full flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <label className="font-semibold" htmlFor="quantity">
                                Quantity:
                            </label>
                            <Input
                                className="w-16"
                                onChange={(e) =>
                                    setQuantity(Number(e.target.value))
                                }
                                value={quantity}
                                id="quantity"
                                type="number"
                            />
                        </div>

                        {!user ? (
                            <Button
                                variant="link"
                                className="text-sm text-slate-600"
                            >
                                <Link href="/sign-in">
                                    sign in to continue shopping
                                </Link>
                            </Button>
                        ) : (
                            <Button
                                disabled={loading || !user}
                                onClick={() => createCart(product.id)}
                            >
                                Add To Cart
                            </Button>
                        )}
                    </CardFooter>
                </div>
            </Card>
        </div>
    );
}
