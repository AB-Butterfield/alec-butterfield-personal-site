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
            console.log("roundInfoSlice action.payload: ", action.payload.currentToonTurnId)
        }
    }
})

export const { updateCurrentToonGag } = roundInfoSlice.actions

export default roundInfoSlice.reducer