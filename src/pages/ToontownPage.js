import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { damageToon } from "../appSlices/toonSlice";

export default function ToontownPage() {

    const dispatch = useDispatch()

    const toon = useSelector((state) => state.toonReducer.toons.toon1.currentHp)

    return (
        <div>
            <div>Toontown Page </div>
            <div>Toon: {toon}</div>
            <button onClick={() => dispatch(damageToon())}>Damage Toon</button>
        </div>
        
    )
    
}