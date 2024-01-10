import { useSelector, useDispatch } from "react-redux";
import { damageToon } from "../appSlices/toonSlice";
import React, { useEffect, useState } from "react";
import { gizmoData } from "../db/gizmoData";
import ToontownGagCard from "../components/ToontownGagCard";
import ToontownSingleToon from "../components/ToontownSingleToon";
import ToontownSingleCog from "../components/ToontownSingleCog";
import { updateCurrentToonId } from "../appSlices/roundInfoSlice";

export default function ToontownPage() {

    const dispatch = useDispatch()
    const toon = useSelector((state) => state.toonReducer.toons.toon1.currentHp)
    const currentToonId = useSelector((state) => state.roundInfoReducer.currentToonTurnId)
    const currentGagInState = useSelector((state) => state.roundInfoReducer.currentSelectedGag)

    //From old Toontown
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
    const gagList = gizmoData[1].data
    const toontownGags = gagList.map(item => {
        return (
            <ToontownGagCard
            key = {item.id}
            track = {item.name}
            item = {item}
            currentToon = {currentToon}
            currentGag = {currentGag}
            // isGagSelected = {(gag) => (setCurrentGag(gag))}
            // isTrackSelected = {(track) => (setCurrentTrack(track))}
            // isGagValue = {(value) => (setCurrentValue(value))}
            // isCurrentTarget = {(target) => (setCurrentTarget(target))}
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
                    // prevData[currentToon].gagName = currentGag
                    // prevData[currentToon].gagValue = currentValue
                    // prevData[curren  tToon].cogTarget = currentTarget
                    // prevData[currentToon].gagTrack = currentTrack
                })
            }}
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
        // dispatch(updateCurrentToonId({currentToonId}))
    }

    function dontHandlePassTurn() {
        
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
                        console.log('toonup')
                        break;
                    case 'trap':
                        console.log('trap')
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
                        console.log('lure')
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
                        console.log('squirt')
                        break;
                    case 'drop':
                        console.log('drop')
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
                                    curCog.cogHP -= (currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.trap)
                                }
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is lure
                        if (currentToon.gagTrack === 'lure') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                                if (cogMultiplierValue[cog].luredMultiplier === 1.5) {
                                    curCog.cogHP -= currentToon.gagValue
                                }
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is sound
                        if (currentToon.gagTrack === 'sound') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.round(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.sound)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }
                        //Track is throw
                        if (currentToon.gagTrack === 'throw') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.round(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.throw)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is squirt
                        if (currentToon.gagTrack === 'squirt') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                              
                                curCog.cogHP -= Math.round(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.squirt)
                                cogMultiplierValue[cog].luredMultiplier = 1
                            }
                        }

                        //Track is drop
                        if (currentToon.gagTrack === 'drop') {
                            for (let cog in cogList) {
                                let curCog = cogList[cog]
                                if (cogMultiplierValue[cog].luredMultiplier === 1) {
                                    curCog.cogHP -= Math.round(currentToon.gagValue * cogMultiplierValue[cog].gagMultipliers.drop)
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
                                currentCog.cogHP -= (currentToon.gagValue)
                            }
                            if (cogMultiplierValue[prevData.cogTarget].luredMultiplier === 1.5) {
                                currentCog.cogHP -= (currentToon.gagValue)
                            }
                        }

                        //Track is lure
                        if(currentToon)

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
            {/* <div className="gizmos-toontown-cog-lock-in">
                {cogLockInButtons}
            </div> */}
            <button onClick={handleSelectAll}> Target All Cogs</button>
            <div className="gizmos-all-gags-container">
                <div>
                {toontownGags}
                </div>
            </div>
            <div>Current gag: {currentGagInState.currentGagName}, Damage: {currentGagInState.currentGagValue}</div>
            <div>Current Toon: {currentToonId}</div>
            {/* <button onClick={handleGagLockIn}>Lock in Gag</button> */}
            <button onClick={handlePassTurn}>Pass turn</button>
            <button onClick={handleCheckGagRound}>Check Gag Round</button>
            <div className="gizmos-toontown-toons-container">
              {toontownToons}
            </div>

        </div>
    )

    // return (
    //     <div>
    //         <div>Toontown Page </div>
    //         <div>Toon: {toon}</div>
    //         <button onClick={() => dispatch(damageToon())}>Damage Toon</button>
    //     </div>
    // )
    
}