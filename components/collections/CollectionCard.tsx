import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CollectionCardProps {
  collection: Collection;
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Card className="flex flex-col md:flex-row md:justify-between">
      <CardHeader>
        <CardTitle>{collection.name} Collection</CardTitle>
        <CardDescription>
          Total Products: {collection.products.length}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="bg-blue-500 hover:bg-blue-600">
          <Link href={`/admin/collections/${collection.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
