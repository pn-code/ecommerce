import React from "react";
import ProductCard from "@/components/ProductCard";

const dummyData = [
    {
        id: 1,
        name: "item 1",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 2,
        name: "item 2",
        ratings: [5.0, 4.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 3,
        name: "item 3",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 4,
        name: "item 4",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 5,
        name: "item 5",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 6,
        name: "item 6",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 7,
        name: "item 7",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 8,
        name: "item 8",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
    {
        id: 9,
        name: "item 9",
        ratings: [5.0],
        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        price: 5,
    },
];

const Shop = () => {
    return (
        <main className="flex flex-col gap-5 sm:gap-0 bg-gray-100">
            {/* Top Searchbar */}
            <form className="flex justify-center py-2 bg-gray-400">
                <input
                    className="rounded-md px-2 py-1 w-[90%]"
                    type="text"
                    placeholder="search..."
                />
            </form>
            {/* Product Container */}
            <section className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center justify-center mx-[15%]">
                {dummyData.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </section>
        </main>
    );
};

export default Shop;
