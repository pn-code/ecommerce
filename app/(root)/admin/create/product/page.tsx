import CreateProductForm from "@/components/forms/products/CreateProductForm";
import { getCollections } from "@/helpers/collections/getCollections";
import React from "react";

export default async function CreateProductPage() {
  const collections = (await getCollections()) as Collection[];

  return (
    <div className="flex flex-col gap-4 p-6 shadow-sm">
      <header className="flex justify-between">
        <h2 className="text-lg font-semibold">New Product</h2>
      </header>

      <CreateProductForm collections={collections} />
    </div>
  );
}
