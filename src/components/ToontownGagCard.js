import React from "react";

export default function ToontownGagCard(props) {

    console.log('data', props.data)
    const gagTrackGags = props.data.map((gag) => {
        return (
            gag
        )
    })

    return (
        <div className="gizmos-toontown-gag-track">
            {gagTrackGags}
        </div>
    )
}