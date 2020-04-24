import React from "react";

const picture = (props) => (
    <picture>
        <source srcSet={props.imageLarge} media={props.mediaLarge} />
        <source srcSet={props.imageMedium} media={props.mediaMedium} />
        <img srcSet={props.imageSmall} alt={props.altText} className={props.className} />
    </picture>
);

export default picture;