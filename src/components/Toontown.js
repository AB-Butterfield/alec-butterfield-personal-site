import React, { useEffect, useState } from "react";
import { gizmoData } from "../db/gizmoData";
import ToontownGagCard from "./ToontownGagCard";
import ToontownSingleToon from "./ToontownSingleToon";

export default function Toontown(props) { 
    const [currentGag, setCurrentGag] = useState("")
    const [currentTrack, setCurrentTrack] = useState("")
    const [currentValue, setCurrentValue] = useState(0)
    const [currentToon, setCurrentToon] = useState(0)
    const [currentRoundToonGags, setCurrentRoundToonGags] = useState([
        {
            toonId: 0,
            gagName:"gag-1",
            gagValue:0,
            cogTarget:0
        }, 
        {
            toonId: 1,
            gagName:"gag-2",
            gagValue:0,
            cogTarget:0
        }, 
        {
            toonId: 2,
            gagName:"",
            gagValue:0,
            cogTarget:0
        }, 
        {
            toonId: 3,
            gagName:"",
            gagValue:0,
            cogTarget:0
        }
    ])

    // console.log("Track: ", currentTrack)
    // console.log("Gag: ", currentGag)
    // console.log("Damage: ", currentValue)

    //Set the Gags array to be added to DOM
    const toontownGags = props.data.map(item => {
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

    //Update the Toons array for the DOM

    let toontownToons = currentRoundToonGags.map(toon => {
        let toonInfo = currentRoundToonGags
        return (
            <ToontownSingleToon 
                toon = {toon}
                toonInfo = {toonInfo}
                isSelectedToon = {(toonId) => (setCurrentToon(toonId))}
            />
        )
    })

    function handleGagLockIn() {
        setCurrentRoundToonGags((prevData) => {
            prevData[currentToon].gagName = currentGag
            prevData[currentToon].gagValue = currentValue
            return (prevData)
        })

        setCurrentToon((prevData) => {
            return (prevData + 1 <= 3 ? prevData + 1 : 0)
        })

    }

    // useEffect(() => {
    // },[currentRoundToonGags])
   

    //Set the currentToon state to include all the info needed
    // useEffect(() => {
    //     setCurrentRoundToonGags((prevData) => {
    //         return (
    //             [...prevData]
    //             // prevData[currentToon].gagName = currentGag
    //         )
    //     })

    // }, [currentGag, currentToon])

    //Commit the currentToon state to the correct spot in the currentRoundToon array
    //Also send that information to the correct SingleToon component

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
            Current Toon: {currentToon}
            {currentGag}
            {currentValue}
            <button onClick={handleGagLockIn}>Lock in Gag</button>
            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>
        </div>
    )
}