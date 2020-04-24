import React from "react";
import SectionContainer from '../../../hoc/SectionContainer/SectionContainer';
import ButtonLink from '../../../components/ButtonLink/ButtonLink';
// import CardHowMuchDoesItCost from '../../../components/Cards/CardHowMuchDoesItCost/CardHowMuchDoesItCost';

const howMuchDoesItCost = (props) => (
    <SectionContainer id="how-much-does-it-cost" className="stack">
        <h2 className="center">How much does it cost</h2>
        <div id="cost-option-container" className="items">
            <div>
                <div className="cost-option stack">
                    <h3>Small business</h3>
                    <div className="card-content">
                        <ul>
                            <li><span className="icon icon-users">Unlimited users</span></li>
                            <li><span className="icon icon-projects">Unlimited projects</span></li>
                            <li><span className="icon icon-patterns">Detailed reporting</span></li>
                            <li><span className="icon icon-cloud">No customised website</span></li>
                            <li><strong>$29.95 per month per user</strong></li>
                        </ul>
                        <div className="cost-action">
                            <ButtonLink
                                href="mailto:contact@parsleypatterns.com?Subject=Parsley website: Free trial enquiry"
                                className="button-primary">
                                Enquire now<span className="a11y-context"> for the small business edition.</span>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="cost-option stack">
                    <h3>Medium-large business</h3>
                    <div className="card-content">
                        <ul>
                            <li><span className="icon icon-users">Up to 50 users</span></li>
                            <li><span className="icon icon-projects">Up to 3 projects</span></li>
                            <li><span className="icon icon-patterns">Detailed reporting</span></li>
                            <li><span className="icon icon-cloud">No customised website</span></li>
                            <li><strong>$39.95 per month per user</strong></li>
                        </ul>
                        <div className="cost-action">
                            <ButtonLink
                                href="mailto:contact@parsleypatterns.com?Subject=Parsley website: Business edition enquiry"
                                className="button-primary">
                                Enquire now<span className="a11y-context"> for the business edition.</span>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
                <div className="cost-option stack">
                    <h3>Enterprise</h3>
                    <div className="card-content">
                        <ul>
                            <li><span className="icon icon-users">Unlimited users</span></li>
                            <li><span className="icon icon-projects">Unlimitered projects</span></li>
                            <li><span className="icon icon-patterns">Detailed reporting</span></li>
                            <li><span className="icon icon-cloud">Customised website</span></li>
                            <li><strong>$49.95 per month per user</strong></li>
                        </ul>
                        <div className="cost-action">
                            <ButtonLink
                                href="mailto:contact@parsleypatterns.com?Subject=Parsley website: Enterprise edition enquiry"
                                className="button-primary">
                                Enquire now<span className="a11y-context"> for the enterprise edition.</span>
                            </ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SectionContainer>
);

export default howMuchDoesItCost;