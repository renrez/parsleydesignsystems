import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import CardTheTeam from '../../../components/Cards/CardTheTeam/CardTheTeam';
import AdamZerner from '../../../assets/adam-zerner.jpg';
import MikeHall from '../../../assets/mike-hall.jpg';

const theTeam = (props) => (
    <SectionContainer id="the-team" className="stack">
        <h2 className="center">The team</h2>
        <div id="team-container" className="items-2">
            <div>
                <CardTheTeam
                    imgSrc={AdamZerner}
                    altText="Photo of Adam Zerner"
                    heading="Adam Zerner"
                    paragraph="Adam has an extensive background in design systems, pattern design, interaction design, user interface development, accessibility, web standards and user experience. He has worked with enterprise-level clients from banking &amp; finance, tourism, media &amp; publishing, retail and government sectors." />
                <CardTheTeam
                    imgSrc={MikeHall}
                    altText="Photo of Mike Hall"
                    heading="Mike Hall"
                    paragraph="An accomplished UX/UI specialist with over 19 years’ experience in website usability and accessibility. Mike has spent the last 8 years focusing on Design Systems and patterns libraries to facilitate the implementation of great design, in both agencies and complex corporate environments." />

            </div>
        </div>
    </SectionContainer>
);

export default theTeam;