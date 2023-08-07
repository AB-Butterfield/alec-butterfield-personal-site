import React from "react";

export default function ToontownSingleCog(props) {
    const {cogId, cogLevel, cogHP} = props.cog
    console.log("Cog props: ", props)

    return (
        <div className="gizmos-toontown-single-cog">Single Cog
            ID: {cogId}
            Level: {cogLevel}
            HP: {cogHP}
        
        </div>
    )
}