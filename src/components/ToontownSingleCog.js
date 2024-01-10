import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentToonId } from "../appSlices/roundInfoSlice";

export default function ToontownSingleCog(props) {
    const {cogId, cogLevel, cogHP} = props.cog
    const dispatch = useDispatch()
    const currentToonId = useSelector((state) => state.roundInfoReducer.currentToonTurnId)
    // const currentSelectedGag = useSelector((state) =>)

    function handleSetTarget(e) {
        console.log('Handle set target...')
        props.isCurrentTarget(cogId)
        props.lockInGag()
    }

    function handleClick(e) {
        console.log('handling Cog Target Click...')
        dispatch(updateCurrentToonId({currentToonId}))
    }

    return (
        <div className="gizmos-toontown-single-cog">
            <div>Cog {cogId + 1}</div>
            <div>Level: {cogLevel}</div>
            <div>HP: {cogHP}</div>
            <button onClick={handleClick}>Target me</button>
            {/* <button onClick={handleSetTarget}>Select Cog</button> */}
        
        </div>
    )
}