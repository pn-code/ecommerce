import AdminProductCard from "@/components/admin/AdminProductCard";
import CollectionsDisplay from "@/components/collections/CollectionsDisplay";
import ProductsSection from "@/components/products/ProductsSection";
import { Button } from "@/components/ui/button";
import { getCollection } from "@/helpers/collections/getCollection";
import { getCollections } from "@/helpers/collections/getCollections";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import React from "react";

interface AdminCollectionDetailsPageProps {
  params: {
    collectionId: string;
  };
}

export async function generateMetadata(
  { params }: AdminCollectionDetailsPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const collectionId = Number(params.collectionId);

  const collection = (await getCollection(collectionId)) as Collection;

  return {
    title: `Uncle Ben's ${collection.name} Collection`,
  };
}

export default async function AdminCollectionDetailsPage({
  params,
}: AdminCollectionDetailsPageProps) {
  const collectionId = Number(params.collectionId);

  const collection = (await getCollection(collectionId)) as Collection;

  if (!collection) throw new Error("Collections could not be found.");

  return (
    <div>
      <header className="flex justify-between items-center mb-4 font-semibold">
        <h2 className="text-lg">{collection.name} Collection</h2>
        <div className="text-sm">
          Total Products: {collection.products.length}
        </div>
      </header>

      <section className="flex flex-col gap-2">
        {collection.products.map((product) => (
          <AdminProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
}
