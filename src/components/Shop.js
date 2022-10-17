import React from "react"
import Product from "./Product"
import productData from "../productData";

const Shop = (props) => {

    const productElements = productData.map(product => 
        <Product 
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            rating={product.rating}
            ratingAmount={product.ratingAmount}
            price={product.price}
            productId={product.id}
            addToCart={props.addToCart}
        />
    )

    return (
        <div className="shopping-page">
            <h1> Our Shop: </h1>
            <div className="products--container">
                {productElements}
            </div>
        </div>
    )
}

export default Shop;