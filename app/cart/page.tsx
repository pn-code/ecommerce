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
            <header className="px-4 text-xl font-bold">
                <h1>Your Cart</h1>
            </header>
            <main>
                {/* Left section with all cart items */}
                <section>
                    {dummyData.map((product) => (
                        <CartItemCard product={product} />
                    ))}
                </section>
                <section>{/* Render Cart Items Here */}</section>
                {/* Right section with payment/proceed to checkout */}
            </main>
        </>
    );
};

export default Cart;
