import React, { useState } from "react";
import { gizmoData } from "../db/gizmoData";
import ToontownGagCard from "./ToontownGagCard";

export default function Toontown(props) { 
    const [currentGag, setCurrentGag] = useState("")
    const [currentTrack, setCurrentTrack] = useState("")
    const [currentValue, setCurrentValue] = useState(0)

    console.log("Track: ", currentTrack)
    console.log("Gag: ", currentGag)
    console.log("Damage: ", currentValue)

    const toontownGags = props.data.map( item => {

        return (
            <ToontownGagCard
            key = {item.id}
            track = {item.name}
            item = {item}
            isGagSelected = {(gag) => (setCurrentGag(gag))}
            isTrackSelected = {() => (setCurrentTrack(item.name))}
            isGagValue = {(value) => (setCurrentValue(value))}
            />
        )
    })

    return (
        <div className="gizmos-toontown-container">
            <div className="gizmos-toontown-cog-container">
            Cogs go here
            </div>
            <div className="gizmos-all-gags-container">
                <div>
                {toontownGags}
                </div>
            </div>
            <div className="gizmos-toons-container">
            
                <div>
                {currentGag}
                </div>
                Toons go here 
            </div>
        </div>
    )
}