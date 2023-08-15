import React from "react";

export default function ToontownSingleCog(props) {
    const {cogId, cogLevel, cogHP} = props.cog
    // console.log("Cog props: ", props)


    function handleSetTarget(e) {
        props.isCurrentTarget(cogId)
        props.lockInGag()
    }

    return (
        <div className="gizmos-toontown-single-cog">
            <div>Cog {cogId + 1}</div>
            <div>Level: {cogLevel}</div>
            <div>HP: {cogHP}</div>
            {/* <button onClick={handleSetTarget}>Select Cog</button> */}
        
        </div>
    )
}