import React from "react";

const Cart = (props) => {

    const [ shoppingCart, setShoppingCart ] = React.useState([])
    const [ totalPrice, setTotalPrice ] = React.useState(0)

    React.useEffect(() => {
        setShoppingCart(props.shoppingCart)

    }, [props.shoppingCart])

    React.useEffect(() => {
        setTotalPrice(getTotal())

    }, [shoppingCart])

    function getTotal() {
        let result;
        if ( shoppingCart.length > 0){
            result = shoppingCart.map(item => (item.price * item.quantity))
                .reduce(((total, num) => total + num))
        }
        return result;
    }

    const shoppingCartElements = shoppingCart.map( item => 
        <div className="shopping-cart-item">
            <div className="left-shopping-cart-item">
                <img src={ item.imgSrc } alt={ item.title }/>
                <div className="item-information">
                    <p> { item.title } </p>
                    <p> Rating : { item.rating } / 5.0 </p>
                    <p> Price : ${ item.price } x { item.quantity }</p>
                    <p> = ${ item.price * item.quantity } </p>
                </div>
            </div>

            <div className="right-shopping-cart-item">
                <button> Remove Items </button>
            </div>
        </div>
    )

    return (
        <div className="Cart">
            <h1> Your Cart: </h1>
            { shoppingCartElements }
            <h2>Total Price : ${ totalPrice } </h2>
            <button onClick={ props.handleClearCart }> Clear Cart </button>
            <button onClick={ props.handleCheckOut }> Check Out </button>
        </div>
    )
}

export default Cart;