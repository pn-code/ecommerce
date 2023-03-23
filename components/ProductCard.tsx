import React from "react";

const ProductCard = ({ product }) => {
    const avgRating =
        product.ratings.reduce(
            (allRatings: number, currentRating: number) =>
                allRatings + currentRating,
            0
        ) / product.ratings.length;

    return (
        <article className="flex flex-col m-4 border-2 border-gray-800 rounded-md h-56 gap-2 cursor-pointer hover:border-gray-500 w-42">
            <img className="object-cover h-32" src={product.img} alt="" />
            <section className="flex flex-col justify-center items-center">
                <h1 className="font-semibold">{product.name}</h1>
                {/* Rating */}
                <section className="flex gap-2 w-52 items-center justify-center">
                    <span>Rated {avgRating}/5</span>
                    <span>({product.ratings.length})</span>
                </section>
                <span>${product.price}</span>
            </section>
        </article>
    );
};

export default ProductCard;
