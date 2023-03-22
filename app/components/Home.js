import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to my Fake E-Commerce Store!</h1>
            <h3>Here's some kind of hook and call to action.</h3>
            <h2><Link to="/shop"> Shop Now! </Link></h2>
        </div>
    )
}

export default Home;