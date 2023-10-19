import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{collection.name} Collection</CardTitle>
      </CardHeader>
    </Card>
  );
}
