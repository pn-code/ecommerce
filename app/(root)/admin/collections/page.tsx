import CollectionsDisplay from "@/components/collections/CollectionsDisplay";
import { Button } from "@/components/ui/button";
import { getCollections } from "@/helpers/collections/getCollections";
import Link from "next/link";
import React from "react";

export default async function AdminCollectionsPage() {
  const collections = (await getCollections()) as Collection[];

  if (!collections) throw new Error("Collections could not be found.");

  return (
    <div>
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Your Collections</h2>

        <Button>
          <Link href="/admin/create/collection">Create Collection</Link>
        </Button>
      </header>

      <CollectionsDisplay collections={collections} />
    </div>
  );
}
