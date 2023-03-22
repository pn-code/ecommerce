import React from "react";

const ProductCard = ({ product }) => {
    const avgRating =
        product.ratings.reduce(
            (allRatings: number, currentRating: number) =>
                allRatings + currentRating,
            0
        ) / product.ratings.length;

    return (
        <article className="bg-gray-50 flex m-4 w-72">
            <img className="object-cover h-32" src={product.img} alt="" />
            <section className="flex flex-col">
                <h1>{product.name}</h1>
                {/* Rating */}
                <section className="flex gap-2">
                    <span>{avgRating}</span>
                    <span>({product.ratings.length})</span>
                </section>
                <span>${product.price}</span>
            </section>
        </article>
    );
};

export default ProductCard;
