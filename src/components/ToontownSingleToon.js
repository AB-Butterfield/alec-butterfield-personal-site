import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ToontownSingleToon(props) {
    
    const {gagName, gagValue, cogTarget, toonId} = props.toon

    const toons = useSelector((state) => state.toons)

    console.log('SingleToon toons: ', toons)

    // const isMyTurn = props.currentToon = toonId ? toonId : "not-my-turn"
    // useEffect(() => {
    //     console.log('Updating info...')
    // })
    //Need variable to set BG color only if toon is selected

    function handleClick(e) {
        props.isSelectedToon(toonId)
    }

    return (
        <div 
            className={`gizmos-toontown-single-toon toon${0}`}
            onClick={handleClick}
            >

            <div className={`gizmos-toontown-single-toon-gag`}>
                Gag: {gagName}
            </div>
            Toon #{toonId + 1}
        </div>
    )
}