import React from 'react';

const cardFeature = (props) => (
    <div className="stack">
        <img src={props.imgSrc} alt="" />
        <h3>{props.heading}</h3>
        <p>{props.paragraph}</p>
    </div>
);

export default cardFeature;