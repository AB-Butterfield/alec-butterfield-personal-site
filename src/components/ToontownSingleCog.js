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

//     function handleChangeCogHP() {
//         let newCogLevel = document.getElementById(`cog-${cogId}-level`).value
//         let newCogHP = (newCogLevel === '12') ? 196 : ((Number(newCogLevel) + 1) * (Number(newCogLevel) + 2))
//         document.getElementById(`cog-${cogId}-hp-input`).value = newCogHP
//         props.isCogHPUpdate(cogId, newCogHP, newCogHP)
    }

    return (
        <div className={`gizmos-toontown-single-cog`}>
            <div>Cog {cogId + 1}</div>
            <div>Level: {cogLevel}</div>
            <div>HP: {cogHP}</div>
            <button onClick={handleClick}>Target me</button>
            {/* {cogLevel}   */}
                <select id={`cog-${cogId}-level`} onChange={handleChangeCogHP} className="gizmos-toontown-single-cog-level-select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>
            
            </div>
            { (cogHP > 0)
                    ? <div>HP: 
                        <input value= {`${cogHP}`} id= {`cog-${cogId}-hp-input`} className="gizmos-toontown-single-cog-hp-input" defaultValue={`${cogHP}`} disabled />
                        {/* {cogHP} */}
                        </div>
                    : <div className="gizmos-toontown-single-cog-hp-dead">DEAD
                    <div value= {`${cogHP}`} id= {`cog-${cogId}-hp-input`} className="gizmos-toontown-single-cog-hp-input" defaultValue={`${cogHP}`} disabled />
                    </div>
                }
           
            <div className="gizmos-toontown-single-cog-hp">
                <div id={`cog-${cogId}`} className={`gizmos-toontown-single-cog-hp-indicator`}></div>
            </div>
            {/* <button onClick={handleSetTarget}>Select Cog</button> */}
        </div>
    )
}