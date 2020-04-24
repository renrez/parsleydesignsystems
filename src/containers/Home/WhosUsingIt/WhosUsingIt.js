import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import CardWhosUsingIt from '../../../components/Cards/CardWhosUsingIt/CardWhosUsingIt';
import Westpac from '../../../assets/westpac.png';
import Telstra from '../../../assets/telstra.png';
import DepartmentOfEducation from '../../../assets/department-of-education.png';

const whosUsingIt = (props) => (
    <SectionContainer id="whos-using-it" className="stack">
        <h2 className="center">Who's using it</h2>
        <div id="whos-using-it-container" className="items">
            <div>
                <CardWhosUsingIt
                    imgSrc={Westpac}
                    heading="Westpac Live"
                    paragraph="With award-winning features and design, the Westpac live banking experience, was designed using the Parsley Patterns methodology." />
                <CardWhosUsingIt
                    imgSrc={Telstra}
                    heading="Telstra"
                    paragraph="The Parsley methodology and tool have been configured to allow Telstra to develop multiple projects efficiently and effectively at scale." />
                <CardWhosUsingIt
                    imgSrc={DepartmentOfEducation}
                    heading="Department of Education and Training"
                    paragraph="The Parsley Pattern methodology has been implemented for the Department of Education and Training. DET have 1 core set of patterns with 3 different styles for 3 different public sites." />

            </div>
        </div>
    </SectionContainer>
);

export default whosUsingIt;