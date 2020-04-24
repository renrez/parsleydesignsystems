import React from 'react';
import Container from '../../hoc/Container/Container';
import Overview from './Overview/Overview';
import HowItWorks from './HowItWorks/HowItWorks';
import Features from './Features/Features';
import TheTeam from './TheTeam/TheTeam';
import WhosUsingIt from './WhosUsingIt/WhosUsingIt';
import HowMuchDoesItCost from './HowMuchDoesItCost/HowMuchDoesItCost';

const home = () => (
    <Container>
        <Overview />
        <HowItWorks />
        <Features />
        <TheTeam />
        <WhosUsingIt />
        <HowMuchDoesItCost />
    </Container>
);

export default home;