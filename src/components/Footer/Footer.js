import React from 'react';
import NextActions from '../NextActions/NextActions';
import Logo from '../Logo/Logo';

const footer = () => (
    <div id="footer-container">
        <footer id="footer">
            <Logo className="logo" />
            <NextActions />
        </footer>
    </div>
);

export default footer;