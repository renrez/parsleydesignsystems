import React from 'react';

const container = (props) => (
    <div id={props.id}>
        {props.children}
    </div>
)

export default container;