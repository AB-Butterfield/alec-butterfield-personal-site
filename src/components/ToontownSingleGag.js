import React, { useState } from "react";

export default function ToontownSingleGag(props) {
    const {gagName, gagValue, gagTarget} = props
    
    function handleClick(e) {
        props.isTrackSelected()
        props.isGagSelected(e.target.dataset.gagname)
        props.isGagValue(e.target.dataset.gagvalue)
        // setBgColor((prevColor) => {
        //     return prevColor === 'gag-clicked' ? 'a' : 'gag-clicked'
        // })

    }
    return (
        <div 
            className={`gizmos-toontown-single-gag ${gagName}`}
            id = "id"
            data-gagname = {gagName}
            data-gagvalue = {gagValue}
            name = {gagName}
            value = {gagValue} 
            onClick={handleClick}>
            {gagName}
        </div>
    )
}