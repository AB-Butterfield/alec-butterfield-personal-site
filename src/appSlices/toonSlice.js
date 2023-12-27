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
        damageToon: (state) => {
            state.toons.toon1.currentHp -= 1
        }
    }
})

export const { increment, damageToon } = toonSlice.actions

export default toonSlice.reducer