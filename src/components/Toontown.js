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
            gagTrack:"track-1",
            gagValue:0,
            cogTarget:0
        }, 
        {
            toonId: 1,
            gagName:"gag-2",
            gagTrack:"track-2",
            gagValue:0,
            cogTarget:1
        }, 
        {
            toonId: 2,
            gagName:"gag-3",
            gagTrack:"track-3",
            gagValue:0,
            cogTarget:2
        }, 
        {
            toonId: 3,
            gagName:"gag-4",
            gagTrack:"track-4",
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
            currentGag = {currentGag}
            isGagSelected = {(gag) => (setCurrentGag(gag))}
            isTrackSelected = {(track) => (setCurrentTrack(track))}
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

    //List Cog information at top
    let toontownCogs = cogList.map(cog => {
        return (
            <ToontownSingleCog 
                cog = {cog}
                isCurrentTarget = {(cog) => (setCurrentTarget(cog))}
                currentToon = {currentToon}
                lockInGag = {() => {setCurrentRoundToonGags((prevData) => {
                    prevData[currentToon].gagName = currentGag
                    prevData[currentToon].gagValue = currentValue
                    prevData[currentToon].cogTarget = currentTarget
                    prevData[currentToon].gagTrack = currentTrack
                })
            }}
            />
        )
    })

    function handleGagLockIn(e) {
        let cogTarget = e.target.id
        console.log("currentGag", currentGag)

        setCurrentRoundToonGags((prevData) => {
            prevData[currentToon].gagName = currentGag
            prevData[currentToon].gagValue = currentValue
            prevData[currentToon].cogTarget = cogTarget
            prevData[currentToon].gagTrack = currentTrack
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
                damageToTake: 0,
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
                damageToTake: 0,
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
                damageToTake: 0,
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
                damageToTake: 0,
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
           
            //If targetting all
            if (currentToon.cogTarget > cogList.length - 1) {
    
                if (currentToon.gagTrack === 'lure') {
                    for (let cog in cogMultiplierValue) {
                        cogMultiplierValue[cog].luredMultiplier = 1.5
                    }
                }

                else if (currentToon.gagTrack !== "toonup"){
                    for (let cog in cogMultiplierValue) {

                        let gagMultiplier = cogMultiplierValue[cog].gagMultipliers.throw
                        
                        if (gagMultiplier === 0) {
                            
                            cogMultiplierValue[cog].gagMultipliers[currentToon.gagTrack] = 1
                        }
                         if (gagMultiplier === 1) {
                            cogMultiplierValue[cog].gagMultipliers[currentToon.gagTrack] = 1.2
                        }
                    }
                }
            }

            //If targetting one
            if (currentToon.cogTarget <= cogList.length) {
                let currentTrack = currentToon.gagTrack

                if (currentTrack === 'lure') {
                    cogMultiplierValue[currentToon.cogTarget].luredMultiplier = 1.5
                } else {
                    let changingMultiplier = cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack]
                    if (changingMultiplier === 0) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                    }
                    if (changingMultiplier === 1) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                    }
                }  
            }
        }
        console.log("Multiplier Value: ", cogMultiplierValue)

            //Resolve damage
            setCogList((prevData) => {
                for (let toon in currentRoundToonGags) {
                    let currentToon = currentRoundToonGags[toon]
                    let cogTarget = currentToon.cogTarget
                    let currentCog = prevData[cogTarget]

                    let currentTrackMultiplier = cogMultiplierValue[cogTarget].gagMultipliers[currentToon.gagTrack]
                    let currentLureMultiplier = cogMultiplierValue[cogTarget].luredMultiplier
                    
                    console.log('currentCog:', currentCog)
                    //Targetting all
                    if (currentToon.cogTarget > cogList.length) {
                        console.log("Still working on targetting all, sorry...")
                        
                    }
                    //Targetting one
                    else if (currentToon.cogTarget <= cogList.length) {
                        //Track is toonup
                        if (currentToon.gagTrack === 'toonup') {

                        }
                        //Track is trap
                        if (currentToon.gagTrack === 'trap') {
                            if (cogMultiplierValue[prevData.cogTarget].luredMultiplier !== 1.5) {
                                currentCog.cogHP -= (currentToon.gagValue)
                            }
                        }

                        //Track is lure

                        //Track is sound
                        if (currentToon.gagTrack === 'sound') {
                            currentCog.cogHP -= (currentToon.gagValue)
                        }
                        //Track is Throw or Squirt
                        if (currentToon.gagTrack === 'throw' || currentToon.gagTrack === 'squirt') {
                            console.log('currentLureMultiplier: ', currentLureMultiplier)
                            currentCog.cogHP -= (currentToon.gagValue * currentTrackMultiplier * currentLureMultiplier)
                        }
                        //Track is drop
                        if (currentToon.gagTrack === 'drop') {
                            if (cogMultiplierValue[currentCog].luredMultiplier !== 1.5) {
                                currentCog.cogHP -= (currentToon.gagValue * currentTrackMultiplier)
                            }
                        }
                    }
                }
                console.log("prevData: ",prevData)
                return (prevData)
            })
            setCurrentRoundToonGags(() => {
                return (
                    [
                        {
                            toonId: 0,
                            gagName:"gag-1",
                            gagTrack:"track-1",
                            gagValue:0,
                            cogTarget:0
                        }, 
                        {
                            toonId: 1,
                            gagName:"gag-2",
                            gagTrack:"track-2",
                            gagValue:0,
                            cogTarget:1
                        }, 
                        {
                            toonId: 2,
                            gagName:"gag-3",
                            gagTrack:"track-3",
                            gagValue:0,
                            cogTarget:2
                        }, 
                        {
                            toonId: 3,
                            gagName:"gag-4",
                            gagTrack:"track-4",
                            gagValue:0,
                            cogTarget:3
                        }
                    ]
                )
            })
            setCurrentGag(() => "")
            setCurrentTrack(() => "")
            setCurrentValue(() => 0)
            setCurrentToon(() => 0)
            setCurrentTarget(() => 0)
        }
        
    function handleCheckGagRound() {
        console.log(currentRoundToonGags)
    }

    function handleSelectAll() {
        setCurrentTarget(() => {
            return 5
        })
    }
    useEffect(() => {
        console.log('Updating info...')
    })

    let cogLockInButtons = cogList.map((cog) => {
        return(
            <button 
            className="gizmos-toontown-cog-lock-btn"
            id={cog.cogId}
            onClick={handleGagLockIn}
            >Select Cog
            </button>
        )

    })
        
    

    return (
        <div className="gizmos-toontown-container">
            <div className="gizmos-toontown-cog-container">
                {toontownCogs}
            </div>
            <div className="gizmos-toontown-cog-lock-in">
                {cogLockInButtons}
            </div>
            <button onClick={handleSelectAll}> Target All Cogs</button>
            <div className="gizmos-all-gags-container">
                <div>
                {toontownGags}
                </div>
            </div>
            Current Toon: {currentToon + 1}
            {/* <button onClick={handleGagLockIn}>Lock in Gag</button> */}
            <button onClick={handlePassTurn}>Pass turn</button>
            <button onClick={handleCheckGagRound}>Check Gag Round</button>
            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>

        </div>
    )
}