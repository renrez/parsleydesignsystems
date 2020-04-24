import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <nav id="navigation">
        <ul className="center">
            <NavigationItem link="#features">Features</NavigationItem>
            <NavigationItem link="#how-it-works">How it works</NavigationItem>
            <NavigationItem link="#the-team">The team</NavigationItem>
            <NavigationItem link="#whos-using-it">Who's using it</NavigationItem>
            <NavigationItem link="#how-much-does-it-cost">How much does it cost</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;