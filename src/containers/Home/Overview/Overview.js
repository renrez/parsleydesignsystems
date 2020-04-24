import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import Picture from "../../../components/Picture/Picture";
import BrowserL from "../../../assets/parsley-browser-l.png";
import BrowserM from "../../../assets/parsley-browser-m.png";
import BrowserS from "../../../assets/parsley-browser-s.png";

const overview = (props) => (
    <SectionContainer id="overview" className="stack">
        <h1 className="center">Parsley Design Systems</h1>
        <p className="center">A design system tool and methodology which facilitates the creation, development and maintenance
            of design systems - resulting in the delivery of consistent, best practice, world-class user
            interfaces through pattern libraries and online style guides.</p>
        <Picture imageLarge={BrowserL}
                 imageMedium={BrowserM}
                 imageSmall={BrowserS}
                 mediaLarge="(min-width: 1200px)"
                 mediaMedium="(min-width: 900px)"
                 altText="screenshot of Parsley Engine"
                 className="center" />
</SectionContainer>
);

export default overview;