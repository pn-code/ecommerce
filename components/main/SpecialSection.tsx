import React from "react";
import ProductCard from "../products/ProductCard";

const products = [
  {
    id: 1,
    name: "Ribeye Steak",
    description: "Delicious and juicy ribeye steak",
    price: 15.99,
    imageUrl: "https://example.com/ribeye.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Filet Mignon",
    description: "Tender and flavorful filet mignon steak",
    price: 19.99,
    imageUrl: "https://example.com/filetmignon.jpg",
    categoryId: 1,
  },
  {
    id: 3,
    name: "Ground Beef (80% Lean)",
    description: "Perfect for burgers and meatloaf",
    price: 8.99,
    imageUrl: "https://example.com/groundbeef.jpg",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Pork Chop",
    description: "Succulent and savory pork chop",
    price: 12.49,
    imageUrl: "https://example.com/porkchop.jpg",
    categoryId: 2,
  },
  {
    id: 5,
    name: "Chicken Breast",
    description: "Boneless and skinless chicken breast",
    price: 9.99,
    imageUrl: "https://example.com/chickenbreast.jpg",
    categoryId: 3,
  },
  {
    id: 6,
    name: "Salmon Fillet",
    description: "Fresh and flaky salmon fillet",
    price: 14.99,
    imageUrl: "https://example.com/salmonfillet.jpg",
    categoryId: 4,
  },
  {
    id: 7,
    name: "Lamb Leg",
    description: "Tender and flavorful lamb leg roast",
    price: 18.99,
    imageUrl: "https://example.com/lambleg.jpg",
    categoryId: 5,
  },
  {
    id: 8,
    name: "Turkey Whole",
    description: "Whole turkey for your holiday feast",
    price: 29.99,
    imageUrl: "https://example.com/turkeywhole.jpg",
    categoryId: 6,
  },
  {
    id: 9,
    name: "Bacon Strips",
    description: "Crispy and delicious bacon strips",
    price: 6.99,
    imageUrl: "https://example.com/baconstrips.jpg",
    categoryId: 7,
  },
  {
    id: 10,
    name: "Ground Turkey",
    description: "Lean ground turkey for healthy recipes",
    price: 7.99,
    imageUrl: "https://example.com/groundturkey.jpg",
    categoryId: 6,
  },
];

export default function SpecialSection() {
  return (
    <div className="flex flex-col gap-4">
      <header>
        <h2 className="text-lg font-semibold">Today's Special Items</h2>
        <p className="text-sm text-slate-800">Buy now before items run out!</p>
      </header>

      <div className="w-full flex gap-2 flex-wrap">
        {products.map((product) => (
          <ProductCard {...product} />
        ))}
      </div>
    </div>
  );
}
