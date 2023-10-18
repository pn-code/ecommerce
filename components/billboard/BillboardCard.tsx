import { cn } from "@/lib/utils";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface BillboardCardProps {
  billboard: Billboard;
}

export default function BillboardCard({ billboard }: BillboardCardProps) {
  return (
    <Card className="flex w-full flex-col md:flex-row">
      <div className="flex justify-center items-center">
        <div className="w-full h-52 md:w-36 md:h-36 relative">
          <Image
            className="p-4 object-scale-down"
            src={billboard.imageUrl}
            alt={billboard.title}
            fill
          />
        </div>
      </div>

      <CardContent className="flex flex-col gap-2 w-full py-4">
        <CardTitle className="flex justify-between">
          <h3>{billboard.title}</h3>
          <div>{billboard.link}</div>
        </CardTitle>

        <CardDescription>{billboard.description}</CardDescription>
        <div className={cn("text-xs text-slate-600 font-semibold flex justify-end", billboard.isShown ? "text-blue-500" : "text-red-600")}>
          is shown: {billboard.isShown ? "TRUE" : "FALSE"}
        </div>
      </CardContent>
    </Card>
  );
}
