import AdminProductCard from "@/components/products/admin/AdminProductCard";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/helpers/products/getProducts";
import Link from "next/link";
import React from "react";

export default async function AdminProductsPage() {
    const products = (await getProducts()) as [];

    return (
        <div>
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Products</h2>

                <Button>
                    <Link href="/admin/create/product">Create Product</Link>
                </Button>
            </header>

            <section className="flex flex-col gap-2 mt-2">
                {products.map((product: any) => (
                    <AdminProductCard key={product.id} product={product} />
                ))}
            </section>
        </div>
    );
}
