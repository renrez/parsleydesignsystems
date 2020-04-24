import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import Picture from "../../../components/Picture/Picture";
import BrowserL from "../../../assets/parsley-in-action-l.png";
import BrowserM from "../../../assets/parsley-in-action-m.png";
import BrowserS from "../../../assets/parsley-in-action-s.png";

const howItWorks = (props) => (
    <SectionContainer id="how-it-works" className="stack">
        <h2 className="center">How it works</h2>
        <p className="center">As solutions grow in size and complexity, so do the design and development teams building and supporting
            them. Larger teams introduce different opinions, styles and levels of experience. Add different physical
            locations, timezones and mother tongues to this and you get a complex environment which is hard to navigate.
            This complex environment leads to inconsistent, poor customer experiences which are both difficult and
            expensive to maintain and develop.</p>
        <Picture imageLarge={BrowserL}
                 imageMedium={BrowserM}
                 imageSmall={BrowserS}
                 mediaLarge="(min-width: 1200px)"
                 mediaMedium="(min-width: 900px)"
                 altText="screenshot of Parsley Engine"
                 className="center" />
    </SectionContainer>
);

export default howItWorks;