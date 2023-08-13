import React, { useState } from "react";

export default function ToontownSingleGag(props) {
    const {gagName, gagValue, gagTarget} = props
    
    function handleClick(e) {
        props.isTrackSelected()
        props.isGagSelected(e.target.dataset.gagname)
        props.isGagValue(e.target.dataset.gagvalue)
        props.isCurrentTarget(e.target.dataset.target)
    }

    return (
        <div 
            className={`gizmos-toontown-single-gag ${gagName}`}
            id = "id"
            data-gagname = {gagName}
            data-gagvalue = {gagValue}
            data-target = {gagTarget}
            onClick={handleClick}>
            {gagName}
        </div>
    )
}