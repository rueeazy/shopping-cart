import React, {  useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const Item = (props) => {
    const [count, setCount] = useState(0)

    const updateCount = (e) => {
        setCount(parseInt(e.target.value))
    }

    const addProduct = () => {
        setCount(count + 1)
    }

    const removeProduct = () => {
        setCount(count - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        
        <div className="item-card">
            <div className="item">
                <img className="product-photo" alt={props.name} src={props.photo} />
                <div className="product-description">
                    <div className="product-title">{props.name}</div>
                    <div className="product-price">{props.price}</div>
                </div>
                <div className="select-container">
                    <FontAwesomeIcon className="icon" onClick={removeProduct} icon={faMinusSquare} />
                    <input type="number" onChange={updateCount} value={count}></input>
                    <FontAwesomeIcon className="icon" onClick={addProduct} icon={faPlusSquare} />
                </div>
                <button className="add"
                        onClick={() => {props.updateProducts(props.product.id, count); resetCount(); }}>Update Cart</button>
            </div>
        </div>
    )
}

export default Item;