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
            cogHP: 6,
            cogMaxHP: 6
        },
        {
            cogId: 1,
            cogLevel: 1,
            cogHP: 6,
            cogMaxHP: 6
        },
        {
            cogId: 2,
            cogLevel: 1,
            cogHP: 6,
            cogMaxHP: 6
        },
        {
            cogId: 3,
            cogLevel: 1,
            cogHP: 6,
            cogMaxHP: 6
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
            isCogHPUpdate = {(cog, newCogHP, cogMaxHP) => {setCogList((prevData) => {
                prevData[cog].cogHP = newCogHP
                prevData[cog].cogMaxHP = cogMaxHP
                return (prevData)
            }, [])}}
            />
        )
    })

    function handleGagLockIn(e) {
        if (currentTarget === "all") {
            setCurrentRoundToonGags((prevData) => {
                prevData[currentToon].gagName = currentGag
                prevData[currentToon].gagValue = currentValue
                prevData[currentToon].cogTarget = 5
                prevData[currentToon].gagTrack = currentTrack
                return (prevData)
            })
        }
        else if (currentTarget === "one") {
            let cogTarget = e.target.id
            setCurrentRoundToonGags((prevData) => {
                prevData[currentToon].gagName = currentGag
                prevData[currentToon].gagValue = currentValue
                prevData[currentToon].cogTarget = cogTarget
                prevData[currentToon].gagTrack = currentTrack
                return (prevData)
            })
        }
        
        setCurrentGag("")       
        setCurrentValue(0)     

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
            if (currentToon.cogTarget === 5) {

                switch (currentToon.gagTrack) {
                    case 'toonup':
                        console.log('toonup-all selected')
                        break;
                    case 'trap':
                        for (let cog in cogMultiplierValue) {
                            if (cogMultiplierValue[cog].luredMultiplier === 1.5 ) {
                                cogMultiplierValue[cog].gagMultipliers.trap = 0
                            }
                            if (cogMultiplierValue[cog].luredMultiplier === 1) {
                                cogMultiplierValue[cog].gagMultipliers.trap = 1.5
                            }
                            
                        }
                        break;
                    case 'lure':
                        for (let cog in cogMultiplierValue) {
                            cogMultiplierValue[cog].luredMultiplier = 1.5
                        }
                        break;
                    case 'sound':
                        for (let cog in cogMultiplierValue) {
                            if (cogMultiplierValue[cog].gagMultipliers.sound === 1) {
                                cogMultiplierValue[cog].gagMultipliers.sound = 1.2
                            }
                            if (cogMultiplierValue[cog].gagMultipliers.sound === 0) {
                                cogMultiplierValue[cog].gagMultipliers.sound = 1
                            }
                        }
                        break;
                    case 'throw':
                        for (let cog in cogMultiplierValue) {
                            if (cogMultiplierValue[cog].gagMultipliers.throw === 1) {
                                cogMultiplierValue[cog].gagMultipliers.throw = 1.2
                            }
                            if (cogMultiplierValue[cog].gagMultipliers.throw === 0) {
                                cogMultiplierValue[cog].gagMultipliers.throw = 1
                            }
                        }
                        break;
                    case 'squirt':
                        for (let cog in cogMultiplierValue) {
                            if (cogMultiplierValue[cog].gagMultipliers.squirt === 1) {
                                cogMultiplierValue[cog].gagMultipliers.squirt = 1.2
                            }
                            if (cogMultiplierValue[cog].gagMultipliers.squirt === 0) {
                                cogMultiplierValue[cog].gagMultipliers.squirt = 1
                            }
                        }
                        break;
                    case 'drop':
                        for (let cog in cogMultiplierValue) {
                            if (cogMultiplierValue[cog].gagMultipliers.drop === 1) {
                                cogMultiplierValue[cog].gagMultipliers.drop = 1.2
                            }
                            if (cogMultiplierValue[cog].gagMultipliers.drop === 0) {
                                cogMultiplierValue[cog].gagMultipliers.drop = 1
                            }
                        }
                        break;
                    default:
                        console.log('Gag track not found')
                }
            }

            //If targetting one
            if (currentToon.cogTarget <= cogList.length) {
                let currentTrack = currentToon.gagTrack

                if (currentTrack === 'lure') {
                    cogMultiplierValue[currentToon.cogTarget].luredMultiplier = 1.5
                } 
                if (currentTrack === 'trap') {
                    let changingMultiplier = cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack]
                    if (changingMultiplier === 0) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                    }
                    if (changingMultiplier === 1) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                    }
                }  
                if (currentTrack !== 'lure' && currentTrack !== 'trap') {
                    let changingMultiplier = cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack]
                    if (changingMultiplier === 0) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1
                    }
                    if (changingMultiplier === 1) {
                        cogMultiplierValue[currentToon.cogTarget].gagMultipliers[currentTrack] = 1.2
                    }
                }  
                
            }
        }
        console.log("Final Multiplier Value: ", cogMultiplierValue)

            //Resolve damage
            setCogList((prevData) => {
                for (let toon in currentRoundToonGags) {
                    let currentToon = currentRoundToonGags[toon]
                    let cogTarget = currentToon.cogTarget
                    let currentCog = prevData[cogTarget]
                    
                    console.log('currentCog:', currentCog)
                    //Targetting all
                    if (currentToon.cogTarget === 5) {
                        console.log("Still working on targetting all, sorry...")


                        //Track is toonup
                        console.log("Toonup - All detected")

                        //Track is trap
                        if (currentToon.gagTrack === 'trap') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                                if (cogMultiplierValue[cog].luredMultiplier === 1.5) {
                                    curCog.cogHP -= Math.floor(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.trap)
                                }
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is lure
                        if (currentToon.gagTrack === 'lure') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                                if (cogMultiplierValue[cog].luredMultiplier === 1.5) {
                                    // curCog.cogHP -= currentToon.gagValue
                                }
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is sound
                        if (currentToon.gagTrack === 'sound') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.floor(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.sound)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }
                        //Track is throw
                        if (currentToon.gagTrack === 'throw') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.floor(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.throw)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is squirt
                        if (currentToon.gagTrack === 'squirt') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.floor(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.squirt)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is drop
                        if (currentToon.gagTrack === 'drop') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                                if (cogMultiplierValue[cog].luredMultiplier === 1) {
                                    curCog.cogHP -= Math.floor(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.drop)
                                }
                            }
                        }
                    }

                    //Targetting one
                    if (currentToon.cogTarget <= cogList.length) {
                        let currentTrackMultiplier = cogMultiplierValue[cogTarget].gagMultipliers[currentToon.gagTrack]
                        let currentLureMultiplier = cogMultiplierValue[cogTarget].luredMultiplier
                        //Track is toonup
                        if (currentToon.gagTrack === 'toonup') {
                            console.log("Single toonup selected")
                        }
                        //Track is trap
                        if (currentToon.gagTrack === 'trap') {
                            if (cogMultiplierValue[prevData.cogTarget].luredMultiplier !== 1.5) {
                                // currentCog.cogHP -= (currentToon.gagValue)
                            }
                            if (cogMultiplierValue[prevData.cogTarget].luredMultiplier === 1.5) {
                                currentCog.cogHP -= (currentToon.gagValue)
                            }
                        }

                        //Track is lure

                        //Track is sound
                        if (currentToon.gagTrack === 'sound') {
                            currentCog.cogHP -= Math.floor(currentToon.gagValue)
                        }
                        //Track is Throw or Squirt
                        if (currentToon.gagTrack === 'throw' || currentToon.gagTrack === 'squirt') {
                            console.log('currentLureMultiplier: ', currentLureMultiplier)
                            currentCog.cogHP -= Math.floor(currentToon.gagValue * currentTrackMultiplier * currentLureMultiplier)
                        }
                        //Track is drop
                        if (currentToon.gagTrack === 'drop') {
                            if (cogMultiplierValue[currentCog].luredMultiplier !== 1.5) {
                                currentCog.cogHP -= Math.floor(currentToon.gagValue * currentTrackMultiplier)
                            }
                        }
                    }
                }
                console.log("prevData: ",prevData)

                //Set cog health bar
                for (let cog in cogList) {
                    document.getElementById(`cog-${cog}`).style.width = `${(cogList[cog].cogHP / cogList[cog].cogMaxHP) * 100}px`
                    console.log("Cog maxHP: ", cogList[0].cogMaxHP)

                    if (cogList[cog].cogHP <= 0) {
                        
                        document.getElementById(`cog-${cog}`).style.width = `0px`
                        document.getElementById(`cog-${cog}`).style.backgroundColor = `red`
                    }
                }
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
            <button className="gizmos-toontown-pass-turn-btn" onClick={handlePassTurn}>SIMULATE</button>
            {/* <button onClick={handleSelectAll}> Target All Cogs</button> */}
            <div className={`gizmos-all-gags-container toon-${currentToon}`}>
                <div>
                {toontownGags}
                </div>
            </div>
            Current Toon: {currentToon + 1}
            {/* <button onClick={handleGagLockIn}>Lock in Gag</button> */}
            {/* <button onClick={handleCheckGagRound}>Check Gag Round</button> */}
            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>

        </div>
    )
}