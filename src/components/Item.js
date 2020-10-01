import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';


const Item = (props) => {
    return (
        <div className="item-card">
            <div className="item">
                <img className="product-photo" alt="image" src="/assets/mens-shorts.jpg" />
                <div className="product-description">
                    <div className="product-title">
                        Shorts
                    </div>
                    <div className="product-price">
                        10.99
                    </div>
                </div>
                <div className="select-container">
                    <FontAwesomeIcon icon={faMinusSquare} />
                    <input type="text"></input>
                    <FontAwesomeIcon icon={faPlusSquare} />
                </div>
            </div>
        </div>
    )
}

export default Item;