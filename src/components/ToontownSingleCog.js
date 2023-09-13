import React from "react";

export default function ToontownSingleCog(props) {
    const {cogId, cogLevel, cogHP} = props.cog
    // console.log("Cog props: ", props)


    function handleSetTarget(e) {
        props.isCurrentTarget(cogId)
        props.lockInGag()
    }

    return (
        <div className={`gizmos-toontown-single-cog`}>
            <div>Cog {cogId + 1}</div>
            <div>Level: {cogLevel}</div>
            { (cogHP >= 0)
                    ? <div>HP: {cogHP}</div>
                    : <div className="gizmos-toontown-single-cog-hp-dead">DEAD</div>
                }
           
            <div className="gizmos-toontown-single-cog-hp">
                <div id={`cog-${cogId}`} className={`gizmos-toontown-single-cog-hp-indicator`}></div>
            </div>
            {/* <button onClick={handleSetTarget}>Select Cog</button> */}
        </div>
    )
}