import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    toons: {
        toon1: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGag: 'none',
            selectedTree: 'none'
        },
        toon2: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGag: 'none',
            selectedTree: 'none'
        },
        toon3: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGag: 'none',
            selectedTree: 'none'
        },
        toon4: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGag: 'none',
            selectedTree: 'none'
        }
    }
}

export const toonSlice = createSlice({
    name: 'toon',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        damageToon: (state, action) => {
            state.toons.toon1.currentHp -= action.payload
        },
        toonSelectGag: (state, action) => {
            state.toons.toon1.selectedGag = "New gag"
            console.log("toonSelectGag payload: ", action.payload)
        }
    }
})

export const { increment, damageToon, toonSelectGag } = toonSlice.actions

export default toonSlice.reducer