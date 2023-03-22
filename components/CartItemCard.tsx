import React from "react";

const CartItemCard = ({ product }) => {
    const avgRating =
        product.ratings.reduce(
            (allRatings: number, currentRating: number) =>
                allRatings + currentRating,
            0
        ) / product.ratings.length;

    return (
        <article className="flex m-4 p-4 border-2 border-gray-800 rounded-md h-56 gap-12 cursor-pointer hover:border-gray-500 w-42 items-center">
            <img className="object-cover h-32" src={product.img} alt="" />
            <section className="flex flex-col justify-center">
                <h1 className="font-semibold">{product.name}</h1>
                {/* Rating */}
                <section className="flex gap-2 w-52">
                    <span>Rated {avgRating}/5</span>
                    <span>({product.ratings.length})</span>
                </section>
                <span>${product.price}</span>
                <span>Quantity: {product.quantity}</span>
            </section>
        </article>
    );
};

export default CartItemCard;
