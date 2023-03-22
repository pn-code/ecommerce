import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Shop from "./components/Shop"
import Cart from "./components/Cart";
import productData from "./productData";
import "./App.css"

export default function App() {

  const [shoppingCart, setShoppingCart] = React.useState([])

  function addToCart (imgSrc, title, rating, price, quantity) {
    setShoppingCart(prevShoppingCart => 
      prevShoppingCart.concat({ 
        imgSrc: imgSrc,
        title: title,
        rating: rating,
        price: price,
        quantity: quantity,
      }))
    alert("added to cart")
  }

  function handleClearCart() {
    setShoppingCart([])
  }

  return (
    <BrowserRouter>
        <Navbar shoppingCart={shoppingCart}/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/about" element={ <About /> }/>

          <Route 
            path="/shop" 
            element={ 
              <Shop 
                addToCart={addToCart}/> 
            }
          />

          <Route 
            path="/my-cart" 
            element={ 
              <Cart 
                shoppingCart={ shoppingCart }
                productData={ productData }
                handleClearCart={ handleClearCart }
                handleCheckOut={ () => {
                  handleClearCart();
                  alert("Your items have been ordered! Thanks for using my fake website.")
                }}
              /> 
            }
          />

        </Routes>
    </BrowserRouter>
  );
}
