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
    const [currentTarget, setCurrentTarget] = useState(0)
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
            gagTrack:"throw",
            gagValue:0,
            cogTarget:0
        }, 
        {
            toonId: 1,
            gagName:"gag-2",
            gagTrack:"throw",
            gagValue:0,
            cogTarget:1
        }, 
        {
            toonId: 2,
            gagName:"gag-3",
            gagTrack:"throw",
            gagValue:0,
            cogTarget:2
        }, 
        {
            toonId: 3,
            gagName:"gag-4",
            gagTrack:"throw",
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
            isCurrentTarget = {(target) => (setCurrentTarget(target))}
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
                isCurrentTarget = {(cog) => (setCurrentTarget(cog))}
            />
        )
    })

    function handleGagLockIn(e) {
        setCurrentRoundToonGags((prevData) => {
            prevData[currentToon].gagName = currentGag
            prevData[currentToon].gagValue = currentValue
            prevData[currentToon].cogTarget = currentTarget
            console.log("Prev data: ",prevData)
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
        let cogMultiplierValue = [
            {
                cogId: 0,
                luredMultiplier: 1,
                gagMultipliers: {
                    toonup: 0,
                    trap: 0,
                    lure: 0,
                    sound: 0,
                    throw: 0,
                    squirt: 0,
                    drop: 0
                },
            },
            {
                cogId: 1,
                luredMultiplier: 1,
                gagMultipliers: {
                    toonup: 0,
                    trap: 0,
                    sound: 0,
                    lure: 0,
                    throw: 0,
                    squirt: 0,
                    drop: 0
                }
            },
            {
                cogId: 2,
                luredMultiplier: 1,
                gagMultipliers: {
                    toonup: 0,
                    trap: 0,
                    lure: 0,
                    sound: 0,
                    throw: 0,
                    squirt: 0,
                    drop: 0
                }
            },
            {
                cogId: 3,
                luredMultiplier: 1,
                gagMultipliers: {
                    toonup: 0,
                    trap: 0,
                    lure: 0,
                    sound: 0,
                    throw: 0,
                    squirt: 0,
                    drop: 0
                }
            }
        ]

        //Set the Multiplier variable for each cog
        for (let toon in currentRoundToonGags) {
            let currentToon = currentRoundToonGags[toon]
            console.log("Current toon: ", currentToon)
            
            if (currentToon.cogTarget === 5 && currentToon.gagTrack !== "lure" && currentToon.gagTrack !== "toonup") {
                console.log("Targetting all...")
                for (let cog in cogMultiplierValue) {

                    let gagMultiplier = cogMultiplierValue[cog].gagMultipliers.throw
                    console.log('gagMultiplier: ', gagMultiplier)
                    if (gagMultiplier === 0) {
                        console.log("Changing multiplier")
                        cogMultiplierValue[cog].gagMultipliers[currentToon.gagTrack] = 1
                    }
                     if (gagMultiplier === 1) {
                        cogMultiplierValue[cog].gagMultipliers[currentToon.gagTrack] = 1.2
                    }
                }
            }

            if (currentToon.cogTarget !== 5) {
                let currentTrack = currentToon.gagTrack

                let changingMultiplier = cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack]

                if (changingMultiplier === 0) {
                    cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                }
                if (changingMultiplier === 1) {
                    cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                }
                
            }
            
            // cogMultiplyerValue[currentRoundToonGags[toon].cogTarget] === 1 ? 1.2 : 1

        }
        // cogMultiplyerValue[0].gagMultipliers.throw = 1
        console.log("Multiplier Value: ", cogMultiplierValue)

        //Resolve damage
        for (let toon in currentRoundToonGags) {
            let currentToon = currentRoundToonGags[toon]


            setCogList((prevData) => {
                // prevData[currentToon.cogTarget].cogHP -= currentToon.gagValue
                return (prevData)
            })
        }


    }

    function handleCheckGagRound() {
        console.log(currentRoundToonGags)
    }

    function handleSelectAll() {
        setCurrentTarget((prevData) => {
            return 5
        })
    }

    return (
        <div className="gizmos-toontown-container">
            <div className="gizmos-toontown-cog-container">
                {toontownCogs}
            </div>
            <button onClick={handleSelectAll}> Target All Cogs</button>
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
            <button onClick={handleCheckGagRound}>Check Gag Round</button>
            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>

        </div>
    )
}