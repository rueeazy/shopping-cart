import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav>
            <Link  style={{display: "flex" , textDecoration: "none"}} to={"/"}>
                <div className="logo">
                    <FontAwesomeIcon icon={faDumbbell} />
                </div>
                <div className="header">Fitness Revolution</div>   
            </Link>
        </nav>
    )
}

export default Nav;