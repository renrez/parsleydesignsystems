import React from 'react';

const nextAction = (props) => (
    <li><a href={props.link} className={props.className}>{props.children}</a></li>
)

export default nextAction;