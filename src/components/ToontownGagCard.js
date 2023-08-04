import React, { useState } from "react";
import ToontownSingleGag from "./ToontownSingleGag";

export default function ToontownGagCard(props) {
    let gags = props.item.gags
    let tracks = props.item.name

    const gagTrackTest = gags.map((gag) => {
        return (
            <ToontownSingleGag 
                gagName = {gag.gagName}
                gagValue = {gag.value}
                gagTarget = {gag.target}
            />
        )
    })

    return (
        <div className={`gizmos-toontown-gag-track ${tracks}`} >
            <div className="gizmos-toontown-gag-name">
                {tracks}
            </div>
            <div className="gizmos-toontown-gag-items">
                {gagTrackTest}
            </div>
        </div>
    )
}