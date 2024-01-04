import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    currentSelectedGag: 'N/a',
    currentToonTurnId: '1'
}

export const roundInfoSlice = createSlice({
    name: 'roundInfo',
    initialState,
    reducers: {
        updateCurrentToonGag: (state, action) => {
            state.toons.toon[state.currentToonTurnId].selectedGag = 'gag Updated'
            console.log( state.toons.toon[state.currentToonTurnId].selectedGag)
        }
    }
})

export const { updateCurrentToonGag } = roundInfoSlice.actions

export default roundInfoSlice.reducer