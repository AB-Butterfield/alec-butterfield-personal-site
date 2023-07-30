import React, { useState } from "react";
import ToontownSingleGag from "./ToontownSingleGag";

export default function ToontownGagCard(props) {

    const gagTrackGags = props.item.gags.map((gag) => {
        return (
            < ToontownSingleGag
                gag = {gag}
            />
        )
    })

    return (
        <div className={`gizmos-toontown-gag-track ${props.item.name}`} >
            <div className="gizmos-toontown-gag-name">
                {props.item.name}
            </div>
            <div className="gizmos-toontown-gag-items">
                {gagTrackGags}
            </div>
        </div>
    )
}