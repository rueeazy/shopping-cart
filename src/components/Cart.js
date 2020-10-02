import React from 'react';
import ListItem from './ListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Cart = (props) => {  
    let x = props.products.reduce((a, b) => ({amount: a.amount + b.amount}))

    let preSum = props.products.map(item => {
        return item.amount * item.price
    })

    let sum = preSum.reduce((a,b) => a + b , 0)


    return (
        <div className="cart-section">
            <div className="top-half">
                <div className="logo-container">
                    <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} />
                    <div className="card-quantity">{x.amount}</div>
                </div>
                <div className="cart-items">
                    <ul>
                        {props.products.map(item => {
                            if(item.amount > 0) {
                                return <ListItem 
                                key={item.id} 
                                item={item} />
                            }
                            // eslint-disable-next-line array-callback-return
                            else return
                        })}
                    </ul>
                </div>
            </div>
            <div className="bottom-half">
                <div className="cart-total">Cart Total</div>
                <div className="cart-amount">${sum}</div>
                <button className="checkout-button">Check Out</button>
            </div>
        </div>
    )
}

export default Cart;