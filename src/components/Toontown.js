import React, { useEffect, useState } from "react";
import { gizmoData } from "../db/gizmoData";
import ToontownGagCard from "./ToontownGagCard";
import ToontownSingleToon from "./ToontownSingleToon";
import ToontownSingleCog from "./ToontownSingleCog";

export default function Toontown(props) { 
    const [currentGag, setCurrentGag] = useState("")
    const [currentTrack, setCurrentTrack] = useState("")
    const [currentValue, setCurrentValue] = useState(0)
    const [currentToon, setCurrentToon] = useState(0)
    const [numberOfToons, setNumberOfToons] = useState(4)
    const [cogList, setCogList] = useState([
        {
            cogId: 0,
            cogLevel: 1,
            cogHP: 25,
            cogTargettedGags: []
        },
        {
            cogId: 1,
            cogLevel: 1,
            cogHP: 25
        },
        {
            cogId: 2,
            cogLevel: 1,
            cogHP: 25
        },
        {
            cogId: 3,
            cogLevel: 1,
            cogHP: 25
        }
    ])

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
            cogTarget:1
        }, 
        {
            toonId: 2,
            gagName:"gag-3",
            gagValue:0,
            cogTarget:2
        }, 
        {
            toonId: 3,
            gagName:"gag-4",
            gagValue:0,
            cogTarget:3
        }
    ])

    //Set the Gags array to be added to DOM
    const toontownGags = props.data.map(item => {
        return (
            <ToontownGagCard
            key = {item.id}
            track = {item.name}
            item = {item}
            currentToon = {currentToon}
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

    let toontownCogs = cogList.map(cog => {
 
        return (
            <ToontownSingleCog 
                cog = {cog}
            />
        )
    })

    function handleGagLockIn(e) {
        setCurrentRoundToonGags((prevData) => {
            prevData[currentToon].gagName = currentGag
            prevData[currentToon].gagValue = currentValue
            return (prevData)
        })

        setCurrentToon((prevData) => {
            return (prevData + 1 < numberOfToons ? prevData + 1 : 0)
        })

    }

    function handlePassTurn() {
        
        //What to handle when passing turn:
        //Set cogs as Trapped, set cogs as Lured
        //Un-lure cogs and deal additional damage if not sound
        //Drop checks if lured, does 0 if lured
        //All toon's gags are divided by type, same-types are added together
        //Save new object for total damage
        //Clear currentToonGagRound for next round
        for (let toon in currentRoundToonGags) {
            let currentToon = currentRoundToonGags[toon]

            setCogList((prevData) => {
                prevData[currentToon.cogTarget].cogHP -= currentToon.gagValue
                return (prevData)
            })
        }
    }

    return (
        <div className="gizmos-toontown-container">
            <div className="gizmos-toontown-cog-container">
                {toontownCogs}
            </div>
            <div className="gizmos-all-gags-container">
                <div>
                {toontownGags}
                </div>
            </div>
            Current Toon: {currentToon + 1}
            {currentGag}
            {currentValue}
            <button onClick={handleGagLockIn}>Lock in Gag</button>
            <button onClick={handlePassTurn}>Pass turn</button>

            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>

        </div>
    )
}