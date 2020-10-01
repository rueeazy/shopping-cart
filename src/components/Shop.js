import React from 'react';
import Item from './Item';
import Cart from './Cart';

const Shop = (props) => {
    return (
        <div>
            <div className="center-container">
                <div className="overlay"></div>
                <div className="shop-content">
                    <div className="items-container">
                       <Item /> 
                       <Item />
                       <Item />
                       <Item />
                    </div>
                    <div className="cart-container">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;