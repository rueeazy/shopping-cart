import React from 'react';

const ListItem = (props) => {
    return (
        <li>
            <div className="product-title">{props.item.name}</div>
            <div className="product-quantity">{props.item.amount}</div>
        </li>
    )
}

export default ListItem