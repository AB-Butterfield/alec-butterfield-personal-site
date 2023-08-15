import React, { useState } from "react";

export default function ToontownSingleGag(props) {
    const {gagName, gagValue, gagTarget, gagTrack} = props
    let selectedGag = ""

    if (props.currentGag === gagName) {
        console.log(`${gagName} selected!`)
        selectedGag = "gag-clicked"
    } else {
        selectedGag = ""
    }

    function handleClick(e) {
        props.isTrackSelected(gagTrack.toLowerCase())
        props.isGagSelected(e.target.dataset.gagname)
        props.isGagValue(e.target.dataset.gagvalue)
        // props.isCurrentTarget(e.target.dataset.target)
    }

    return (
        <div 
            className={`gizmos-toontown-single-gag ${gagName} ${selectedGag}`}
            // id = "id"
            data-gagname = {gagName}
            data-gagvalue = {gagValue}
            onClick={handleClick}>
            {gagName}
        </div>
    )
}