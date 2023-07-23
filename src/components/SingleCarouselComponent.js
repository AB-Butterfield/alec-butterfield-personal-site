import React from "react";


export default function SingleCarouselComponent(props) {
    const {id, name, url, imgArray} = props
    let bobaImg = imgArray[0]
    return (
        <div className="gizmos-single-carousel-item">
            ID: {id}, 
            Name: {name} 
            {/* <img className="gizmos-single-boba-img" src={bobaImg} alt="boba" /> */}
        </div>
    )
}