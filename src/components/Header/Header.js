import React, {Component} from 'react';
import NextActions from '../NextActions/NextActions';
//import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
//import MenuToggle from '../MenuToggle/MenuToggle';

class Header extends Component {
    render() {
        return (
            <div id="header-container">
                <a id="skip-to-main" href="#main">Skip to main content</a>
                <header id="header">
                    <div id="logo-container">
                        {/*<MenuToggle />*/}
                        <Logo className="logo" />
                        <NextActions />
                    </div>
                    {/*
                    <div id="nav-container">
                        <Navigation />
                        <NextActions className="actions-mobile" />
                    </div>
                    */}
                </header>
            </div>
        )
    }
}

export default Header;