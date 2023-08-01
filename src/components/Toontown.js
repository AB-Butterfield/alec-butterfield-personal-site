import React from "react";
import { gizmoData } from "../db/gizmoData";
import ToontownGagCard from "./ToontownGagCard";

export default function Toontown(props) { 
    console.log("Toontown Props: ",props.isGagClicked)
    const toontownGags = props.data.map( item => {
        return (
            <ToontownGagCard
            key = {item.id}
            track = {item.name}
            item = {item}
            isGagClicked = {props.isGagClicked}
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
            Toons go here
            </div>
        </div>
    )
}