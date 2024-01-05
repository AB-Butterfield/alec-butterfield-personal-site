import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toonSelectGag } from "../appSlices/toonSlice";
import { updateCurrentToonGag } from "../appSlices/roundInfoSlice";

export default function ToontownSingleGag(props) {
    const {gagName, gagValue, gagTarget, gagTrack} = props
    let selectedGag = ""
    const dispatch = useDispatch()
    const roundData = useSelector((state) => state.roundInfoReducer)
    
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
        dispatch(toonSelectGag({gagName, gagValue, currentToonTurnId: roundData.currentToonTurnId}))
        dispatch(updateCurrentToonGag({gagName, currentToonTurnId: roundData.currentToonTurnId}))
        // console.log(e.target.dataset)
    }

    return (
        <div 
            className={`gizmos-toontown-single-gag ${gagName} ${selectedGag}`}
            // id = "id"
            data-gagname = {gagName}
            data-gagvalue = {gagValue}
            data-gagtarget = {gagTarget}
            onClick={handleClick}>
            {gagName}
        </div>
    )
}