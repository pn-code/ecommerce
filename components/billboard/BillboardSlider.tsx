"use client";

import Image from "next/image";
import img1 from "@/public/assets/images/carousel/img1.jpg";
import img2 from "@/public/assets/images/carousel/img2.jpg";
import img3 from "@/public/assets/images/carousel/img3.jpg";
import img4 from "@/public/assets/images/carousel/img4.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    CircleIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const data = [img1, img2, img3, img4];

export default function BillboardSlider() {
    const [index, setIndex] = useState(0);

    const handleChangeLeft = () => {
        setIndex((prev) => {
            if (prev === 0) {
                return data.length - 1;
            }
            return prev - 1;
        });
    };

    const handleChangeRight = () => {
        setIndex((prev) => {
            if (prev + 1 >= data.length) {
                return 0;
            }
            return prev + 1;
        });
    };

    return (
        <div className="relative w-full h-[calc(100vh-200px)]">
            <Button
                onClick={handleChangeLeft}
                type="button"
                className="bg-black/95 border border-slate-200 absolute z-10 bottom-4 text-white left-1"
            >
                <ArrowLeftIcon />
            </Button>
            <Image className="object-cover" src={data[index]} alt="" fill />

            <div className="h-full flex flex-col text-slate-50 justify-center items-center absolute p-2 w-full md:w-[30vw] lg:w-[24vw] bg-slate-900/80 top-0 right-0">
                <h3 className="text-xl font-bold text-center md:w-left mb-2">
                    Uncle Ben's Collections
                </h3>

                <p className="text-sm text-center text-slate-300 mb-6">
                    Carefully sourced from the most esteemed cuts of meat
                    provided by local, reputable farmers, our meat is
                    consistently fresh and of the highest quality.
                </p>

                <Button variant="outline" className="text-lg px-7 py-6">
                    view our products
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
            <div className="w-full absolute flex gap-1 bottom-4 left-[44%] text-white">
                {data.map((billboard, idx) => (
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
