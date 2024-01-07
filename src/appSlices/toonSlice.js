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
            selectedGagName: 'none',
            selectedTree: 'none'
        },
        toon2: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGagName: 'none',
            selectedTree: 'none'
        },
        toon3: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGagName: 'none',
            selectedTree: 'none'
        },
        toon4: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            name: 'Lolly',
            target: -1,
            selectedGagName: 'none',
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
            const currentGag = action.payload.currentGag

            console.log("Action Payload: ", action.payload)
            console.log("also this: ", action.payload.currentToonTurnId)

            switch(action.payload.currentToonTurnId) {
                case '1':
                    state.toons.toon1.selectedGagName = action.payload.gagName
                    console.log('Gag set!')
                    break;
                case '2':
                    state.toons.toon2.selectedGagName = currentGag
                    break;
                case '3':
                    state.toons.toon3.selectedGagName = currentGag
                    break;
                case '4':
                    state.toons.toon4.selectedGagName = currentGag
                    break;
                default:
                    console.log('Error: ToonId Not Found In State')
                    break;
            }
        }
    }
})

export const { increment, damageToon, toonSelectGag } = toonSlice.actions

export default toonSlice.reducer