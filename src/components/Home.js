import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="center-container">
                <div className="overlay"></div>
                <div className="main-content">
                    <div className="title">Viva la Fitness!</div>
                    <Link to="/shop">
                        <button className="shop-button">Shop Now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;