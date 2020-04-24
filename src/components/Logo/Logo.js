import React from 'react';
import Logo from '../../assets/logo.png';

const logo = (props) => (
    <div className={props.className}>
        <a href="/">
            <img src={Logo} alt="Parsley logo" />
            <span className="a11y-context"> Parsley home page</span>
        </a>
    </div>
);

export default logo;