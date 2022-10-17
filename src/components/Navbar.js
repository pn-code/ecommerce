import React from "react";
import { Link } from "react-router-dom"

const Navbar = (props) => {

    const [ shoppingCartAmount, setShoppingCartAmount ] = React.useState(0)

    React.useEffect(() => {
        setShoppingCartAmount(props.shoppingCart.length)
    }, [props.shoppingCart])

    const navStyle = {
        textDecoration: "none",
        color: "white",
    }

    return (
        <nav className="navbar--container">
            <Link to="/" style={navStyle}>
                <div className="company-logo">
                    <h1 className="logo-text">
                        Ebazon
                    </h1>
                </div>
            </Link>

            <ul className="navbar-directory">
                    <li>            
                        <Link to="/about" style={navStyle}> About </Link>
                    </li>
                    <li>            
                        <Link to="/shop" style={navStyle}> Shop </Link>
                    </li>
                    <li>            
                        <Link to="/my-cart" 
                            style={navStyle}> 
                            My Cart : {shoppingCartAmount}
                        </Link>
                    </li>
            </ul>
        </nav>
        )
}




export default Navbar;