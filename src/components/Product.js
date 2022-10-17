import Popup from 'reactjs-popup';
import "../popup.css"
import Counter from './Counter';


const Product = (props) => {

    return (
        <Popup trigger={
            <div className="product--container" onClick={props.handleClick}>
                <img src={props.imgSrc} alt={props.title}></img>
                <h4>{props.title}</h4>
                <div>Rating: {props.rating}</div>
                <div>{props.ratingAmount} reviews</div>
                <div>${props.price}.00</div>
            </div>
        }
        position="center center"
        arrow="false"
        >
            <div className='pop-up--container'>

                <div className='left-side-pop-up'>
                    <img src={props.imgSrc} alt={props.title}></img>
                    <h3>{props.title}</h3>
                    <div>Rating: {props.rating}</div>
                    <div>{props.ratingAmount} reviews</div>
                    <div>${props.price}.00</div>
                </div>

                <div className='right-side-pop-up'>
                    <Counter 
                        addToCart={props.addToCart} 
                        productId={props.productId}
                        productImgSrc={props.imgSrc}
                        productPrice={props.price}
                        productTitle={props.title}
                        productRating={props.rating}
                    />
                </div>
            </div>
        </Popup>

    )
}

export default Product;