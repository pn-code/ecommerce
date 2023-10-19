import React from "react";
import CollectionCard from "./CollectionCard";

interface CollectionsDisplayProps {
  collections: Collection[];
}

export default function CollectionsDisplay({
  collections,
}: CollectionsDisplayProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
}
