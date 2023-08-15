import React, { useState } from "react";
import ToontownSingleGag from "./ToontownSingleGag";

export default function ToontownGagCard(props) {
    let gags = props.item.gags
    let track = props.item.name

    const gagTrackTest = gags.map((gag) => {
        return (
            <ToontownSingleGag 
                gagName = {gag.gagName}
                gagValue = {gag.value}
                gagTarget = {gag.target}
                gagTrack = {track}
                currentGag = {props.currentGag}
                isGagSelected = {props.isGagSelected}
                isTrackSelected = {props.isTrackSelected}
                isGagValue = {props.isGagValue}
                isCurrentTarget = {props.isCurrentTarget}
            />
        )
    })

    return (
        <div className={`gizmos-toontown-gag-track ${track}`} >
            <div className="gizmos-toontown-gag-name">
                {track}
            </div>
            <div className="gizmos-toontown-gag-items">
                {gagTrackTest}
            </div>
        </div>
    )
}