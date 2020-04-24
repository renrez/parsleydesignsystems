import React from 'react';

const cardWhosUsingIt = (props) => (
    <div className="stack stack-small">
        <img src={props.imgSrc} alt={props.altText} />
        <h3 className="center">{props.heading}</h3>
        <p>{props.paragraph}</p>
    </div>
);

export default cardWhosUsingIt;