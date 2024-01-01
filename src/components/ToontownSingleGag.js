import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toonSelectGag } from "../appSlices/toonSlice";

export default function ToontownSingleGag(props) {
    const {gagName, gagValue, gagTarget, gagTrack} = props
    let selectedGag = ""
    const dispatch = useDispatch()
    
    if (props.currentGag === gagName) {
        console.log(`${gagName} selected!`)
        selectedGag = "gag-clicked"
    } else {
        selectedGag = ""
    }

    function handleClick(e) {
        // props.isTrackSelected(gagTrack.toLowerCase())
        // props.isGagSelected(e.target.dataset.gagname)
        // props.isGagValue(e.target.dataset.gagvalue)
        // props.isCurrentTarget(e.target.dataset.gagtarget)
        console.log(e.target.dataset)
    }

    return (
        <div 
            className={`gizmos-toontown-single-gag ${gagName} ${selectedGag}`}
            // id = "id"
            data-gagname = {gagName}
            data-gagvalue = {gagValue}
            data-gagtarget = {gagTarget}
            onClick={() => dispatch(toonSelectGag({gagName, gagValue}))}>
            {gagName}
        </div>
    )
}