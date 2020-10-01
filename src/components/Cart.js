import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {
    return (
        <div className="cart-section">
            <div className="top-half">
                <div className="logo-container">
                    <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                    <div className="card-quantity">
                        0
                    </div>
                </div>
                <div className="cart-items">
                    <ul>
                        <li>
                            <div className="product-title">Mens Shorts</div>
                            <div className="product-quantity">0</div>
                        </li>
                        <li>
                            <div className="product-title">Mens Shorts</div>
                            <div className="product-quantity">0</div>
                        </li>
                        <li>
                            <div className="product-title">Mens Shorts</div>
                            <div className="product-quantity">0</div>
                        </li>
                        <li>
                            <div className="product-title">Mens Shorts</div>
                            <div className="product-quantity">0</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-half">
                <div className="cart-total">Cart Total</div>
                <div className="cart-amount">$0.00</div>
                <button className="checkout-button">Check Out</button>
            </div>
        </div>
    )
}

export default Cart;