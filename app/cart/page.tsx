import CartItemCard from "@/components/CartItemCard";
import React from "react";
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

const Cart = () => {
    return (
        <>
            <main className="flex flex-col mb-10 sm:flex-row">
                {/* Left section with all cart items */}
                <section className="sm:flex-[2]">
                    <h1 className="text-2xl mx-4 font-bold">Your Cart</h1>
                    {dummyData.map((product) => (
                        <CartItemCard product={product} />
                    ))}
                </section>

                {/* Cart Details */}
                <section className="flex flex-col gap-4 w-full flex-1 text-center">
                    <h1 className="text-2xl mx-4 font-bold">Cart Details</h1>
                    <h2>Total: </h2>
                    <button className="bg-blue-500 text-white text-xl font-bold rounded-md py-4 sm:py-2 hover:underline mx-4">
                        Checkout
                    </button>
                </section>
            </main>
        </>
    );
};

export default Cart;
