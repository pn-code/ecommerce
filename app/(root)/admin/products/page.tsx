import AdminProductCard from "@/components/admin/AdminProductCard";
import ProductCard from "@/components/products/ProductCard";
import { getProducts } from "@/helpers/products/getProducts";
import React from "react";

export default async function AdminProductsPage() {
  const products = (await getProducts()) as [];

  return (
    <div>
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">Your Products</h2>
      </header>

      <section className="flex flex-col gap-2 mt-2">
        {products.map((product: any) => (
          <AdminProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
