import React from "react";
import BillboardCard from "./BillboardCard";

interface BillboardDisplayProps {
  billboards: Billboard[];
}

export default function BillboardDisplay({
  billboards,
}: BillboardDisplayProps) {
  return (
    <div className="w-full h-full flex flex-col">
      {billboards.map((billboard) => (
        <BillboardCard key={billboard.id} billboard={billboard} />
      ))}
    </div>
  );
}
