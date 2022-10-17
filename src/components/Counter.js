import React from "react"

const Counter = (props) => {

    const [count, setCount] = React.useState(0)

    function handleCount (e) {
        if (e.target.innerText === "+") {
            setCount(prevCount => prevCount + 1)
        } else if (e.target.innerText === "-" && count !== 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    function addItemToCart () {
        const { productImgSrc, productTitle, productRating, productPrice } = props
        if (count > 0){
            props.addToCart( productImgSrc, productTitle, productRating, productPrice, count )
        } else {
            alert("Please enter a valid quantity.")
        }
    }

    return (
        <div className="Counter">
            <h3> Quantity: </h3>
            <h4> {count} </h4>
            <button onClick={handleCount}>+</button>
            <button onClick={handleCount}>-</button>
            <button 
                onClick={ addItemToCart }
                > Add to Cart
            </button>
        </div>
    )
}

export default Counter;