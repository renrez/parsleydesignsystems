import React from 'react';

const cardTheTeam = (props) => (
    <div className="team stack center">
        <h3>{props.heading}</h3>
        <img src={props.imgSrc} alt={props.altText} className="center" />
        <div className="card-content">
            <p>{props.paragraph}</p>
        </div>
    </div>
);

export default cardTheTeam;