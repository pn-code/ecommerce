"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import img1 from "@/public/assets/images/carousel/img1.jpg";
import img2 from "@/public/assets/images/carousel/img2.jpg";
import img3 from "@/public/assets/images/carousel/img3.jpg";
import img4 from "@/public/assets/images/carousel/img4.jpg";
import { Button } from "../ui/button";

const images = [img1, img2, img3, img4];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Create an interval to advance to the next slide
    const intervalId = setInterval(goToNextSlide, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="flex w-full h-[calc(100vh-120px)] justify-center gap-2 items-center">
      <Button
        className="border-2 h-10 w-10 rounded-full border-slate-900 font-bold text-xl"
        onClick={goToPrevSlide}
      >
        &lt;
      </Button>

      <Image
        className="carousel-image"
        src={images[currentIndex]}
        alt={"Meat Image"}
        height={1200}
        width={1200}
      />

      <Button
        className="border-2 h-10 w-10 rounded-full border-slate-900 font-bold text-xl"
        onClick={goToNextSlide}
      >
        &gt;
      </Button>
    </div>
  );
}
