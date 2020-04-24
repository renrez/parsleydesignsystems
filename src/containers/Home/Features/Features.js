import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import CardFeature from '../../../components/Cards/CardFeature/CardFeature';
import ConsistentExperiences from '../../../assets/consistent-experiences.jpg';
import BeautifulProducts from '../../../assets/beautiful-products.jpg';
import SustainableCode from '../../../assets/sustainable-code.jpg';

const features = (props) => (
    <SectionContainer id="features" className="stack">
        <h2 className="center">Life with Parsley Design Systems</h2>
        <div id="features-container" className="items">
            <div>
                <CardFeature
                    imgSrc={ConsistentExperiences}
                    heading="Consistent experiences"
                    paragraph="A single source of truth style guide/pattern library ensures a consistent customer experience through
                        the use of approved UI patterns, resulting in reduced cognitive load for all users of your products,
                        no matter what their needs." />
                <CardFeature
                    imgSrc={BeautifulProducts}
                    heading="Beautiful products"
                    paragraph="An approved pattern library ensures the design vision is not lost and brand integrity is kept. What
                        gets designed gets built and implemented. With freed up time, teams can focus on formally
                        nice-to-have considerations, such a difficult business or design challenges and ensuring all your
                        products are fully accessible to all your users." />
                <CardFeature
                    imgSrc={SustainableCode}
                    heading="Sustainable code"
                    paragraph="The Parsley Design System ensures a smaller physical code base though referenced code, tokenisation
                        and a systemic approach to development. This systemic approach leads to a natural cross-pollination
                        of skills between previously disparate teams, leading to an easier, quicker and cheaper to maintain
                        and develop code base." />
            </div>
        </div>
    </SectionContainer>
);

export default features;