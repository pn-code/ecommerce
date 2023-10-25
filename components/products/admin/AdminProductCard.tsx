"use client";

import Image from "next/image";

import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AdminProductCardProps {
    product: any;
}

export default function AdminProductCard({ product }: AdminProductCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const deleteProduct = async (productId: number) => {
        try {
            setLoading(true);

            const res = await axios.delete(`/api/products/${productId}`);

            if (res.status === 200) {
                toast.success(`${product.name} has been successfully deleted.`);
                router.refresh();
            }
        } catch (error: any) {
            console.error("PRODUCTS/DELETE: ", error.message);
            toast.error(
                "Could not delete product at this time. Please try again later."
            );
        }
    };

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
                <CardTitle className="flex justify-between items-center">
                    <h3>{product.name}</h3>
                    <div className="flex gap-2 items-center">
                        <div>${product.price * 0.01}.00 USD</div>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Button
                                    className="p-1 rounded-full h-6 w-6"
                                    variant="outline"
                                >
                                    <TriangleDownIcon />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    Product Changes
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                    className="bg-slate-200"
                                    onClick={() =>
                                        setIsEditing((prev) => !prev)
                                    }
                                >
                                    Edit (WIP)
                                </DropdownMenuItem>
                                <DropdownMenuItem className="p-0">
                                    <button
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                        className="w-full py-1.5 px-2 mt-1  rounded-sm text-left bg-red-400 hover:bg-red-500 text-white"
                                    >
                                        Delete
                                    </button>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
        </Card>
    );
}
