import React, { useState } from "react";

export default function ToontownSingleGag(props) {
    const [bgColor, setBgColor] = useState('a')
    const {gagName, gagValue, gagTarget} = props

    let gag = props.gag
    
    function handleClick(e) {
        console.log(e.target)
        setBgColor((prevColor) => {
            return prevColor === 'gag-clicked' ? 'a' : 'gag-clicked'
        })

    }
    return (
        <div className={`gizmos-toontown-single-gag ${bgColor}`} id={gag} onClick={handleClick}>
            {gagName}
        </div>
    )
}