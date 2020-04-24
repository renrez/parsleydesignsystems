import React from 'react';

const menuToggle = () => (
    <div id="menu-toggle">
        <a href="#navigation">
            <svg id="menu-svg" xmlns="http://www.w3.org/2000/svg" width="44px" height="32px"
                 viewBox="0 0 44 32" role="img" aria-labelledby="menu-title">
                <title id="menu-title">Menu</title>
                <rect fill="#ffffff" width="44" height="32"/>
                <line fill="none" stroke="#3686BE" strokeWidth="3" strokeLinecap="round"
                      strokeMiterlimit="10" x1="4" y1="4" x2="40" y2="4"/>
                <line fill="none" stroke="#3686BE" strokeWidth="3" strokeLinecap="round"
                      strokeMiterlimit="10" x1="4" y1="16" x2="40" y2="16"/>
                <line fill="none" stroke="#3686BE" strokeWidth="3" strokeLinecap="round"
                      strokeMiterlimit="10" x1="4" y1="28" x2="40" y2="28"/>
            </svg>
        </a>
    </div>
);

export default menuToggle;