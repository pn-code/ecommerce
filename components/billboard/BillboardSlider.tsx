"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CircleIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BillboardSliderProps {
  billboards: Billboard[];
}

export default function BillboardSlider({ billboards }: BillboardSliderProps) {
  const [index, setIndex] = useState(0);

  const handleChangeLeft = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return billboards.length - 1;
      }
      return prev - 1;
    });
  };

  const handleChangeRight = () => {
    setIndex((prev) => {
      if (prev + 1 >= billboards.length) {
        return 0;
      }
      return prev + 1;
    });
  };

  if (!billboards) return null;

  return (
    <div className="relative w-full h-screen md:h-[calc(100vh-144px)]">
      <Button
        onClick={handleChangeLeft}
        type="button"
        className="bg-black/95 border border-slate-200 absolute z-10 bottom-4 text-white left-1"
      >
        <ArrowLeftIcon />
      </Button>
      <Image
        className="object-cover"
        src={billboards[index].imageUrl}
        alt=""
        fill
      />

      <div className="h-full flex flex-col text-slate-50 justify-center items-center absolute p-2 w-full md:w-[30vw] lg:w-[24vw] bg-slate-900/80 top-0 right-0">
        <h3 className="text-xl font-bold text-center md:w-left mb-2">
          {billboards[index].title}
        </h3>

        <p className="text-sm text-center text-slate-300 mb-6 px-4">
          {billboards[index].description}
        </p>

        <Button variant="outline" className="text-sm px-7 py-6">
          <Link href={billboards[index].link}>
            explore our {billboards[index].title.toLowerCase()}
          </Link>
        </Button>
      </div>

      <Button
        onClick={handleChangeRight}
        type="button"
        className="bg-black/95 border border-slate-200 absolute z-10 bottom-4 right-1 text-white"
      >
        <ArrowRightIcon />
      </Button>

      {/* Circles */}
      <div className="w-full absolute flex gap-1 bottom-4 justify-center text-white">
        {billboards.map((billboard, idx) => (
          <button
            onClick={() => setIndex(idx)}
            type="button"
            key={idx}
            className={cn(
              "group rounded-full",
              idx === index && "bg-indigo-600"
            )}
          >
            <CircleIcon className="group-hover:bg-slate-400 rounded-full" />
          </button>
        ))}
      </div>
    </div>
  );
}
