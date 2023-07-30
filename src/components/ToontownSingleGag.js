import React, { useState } from "react";

export default function ToontownSingleGag(props) {
    const [bgColor, setBgColor] = useState('a')
    let gag = props.gag

    function handleClick(e) {
        setBgColor((prevColor) => {
            return prevColor === 'gag-clicked' ? 'a' : 'gag-clicked'
        })
        console.log(bgColor)
    }
    return (
        <div className={`gizmos-toontown-single-gag ${bgColor}`} id={gag} onClick={handleClick}>
            {gag}
        </div>
    )
}