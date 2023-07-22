import React from "react";

export default function CarouselCard(props) {
    const name = props.name

    return (
        <div className="single-carousel-card-container">
            <div>Single Carousel Component</div>
            <div>{name}</div>
            <div>Carousel Image</div>
        </div>
    )
}