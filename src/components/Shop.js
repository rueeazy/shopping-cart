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
                        {props.products.map(item => {
                            return <Item 
                                    product={item}
                                    key={item.id} 
                                    name={item.name}
                                    price={item.price}
                                    photo={item.photo}
                                    updateProducts={props.updateProducts} />
                        })} 
                    </div>
                    <div className="cart-container">
                        <Cart 
                        cartTotal={props.cartTotal}
                        products={props.products} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;