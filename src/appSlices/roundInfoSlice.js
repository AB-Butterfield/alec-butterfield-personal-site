import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 0,
    currentSelectedGag: {
        currentGagName: "N/a",
        currentGagValue: 0,
        boolCurrentGagTargetAll: false,
        currentGagTrack: -1
    },
    currentToonTurnId: 1
}

export const roundInfoSlice = createSlice({
    name: 'roundInfo',
    initialState,
    reducers: {
        updateCurrentToonGag: (state, action) => {
            state.currentSelectedGag = action.payload.gagToAddToState
            console.log("roundInfoSlice action.payload: ", action.payload)
        },
        updateCurrentToonId: (state, action) => {
            let prevToonId = action.payload.currentToonId
            if (prevToonId < 4) {
                state.currentToonTurnId += 1
            }
            else if (prevToonId === 4) {
                state.currentToonTurnId = 1
            }
            else {
                console.log("Error: Toon Id not 1-4")
            }
        },
        updateCogTargetInfo: (state, action) => {

        }
    }
})

export const { updateCogTargetInfo, updateCurrentToonGag, updateCurrentToonId } = roundInfoSlice.actions

export default roundInfoSlice.reducer