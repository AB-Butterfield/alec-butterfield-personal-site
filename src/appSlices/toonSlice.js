import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    toons: {
        toon1: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            toonName: 'Holly',
            target: -1,
            selectedGagName: 'none',
            selectedGagDamage: 0,
            selectedGagTrack: 'none'
        },
        toon2: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            toonName: 'Lolly',
            target: -1,
            selectedGagName: 'none',
            selectedGagDamage: 0,
            selectedGagTrack: 'none'
        },
        toon3: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            toonName: 'Molly',
            target: -1,
            selectedGagName: 'none',
            selectedGagDamage: 0,
            selectedGagTrack: 'none'
        },
        toon4: {
            active: true,
            maxHp: 20,
            currentHp: 20,
            toonName: 'Polly',
            target: -1,
            selectedGagName: 'none',
            selectedGagDamage: 0,
            selectedGagTrack: 'none'
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
            console.log("Action Payload: ", action.payload)

            switch(action.payload.currentToonTurnId) {
                case '1':
                    state.toons.toon1.selectedGagName = action.payload.gagName
                    state.toons.toon1.selectedGagDamage = action.payload.gagValue
                    state.toons.toon1.target = action.payload.gagTarget
                    state.toons.toon1.selectedGagTrack = action.payload.gagTrack
                    break;
                case '2':
                    state.toons.toon2.selectedGagName = action.payload.gagName
                    state.toons.toon2.selectedGagDamage = action.payload.gagValue
                    state.toons.toon2.target = action.payload.gagTarget
                    state.toons.toon2.selectedGagTrack = action.payload.gagTrack
                    break;
                case '3':
                    state.toons.toon3.selectedGagName = action.payload.gagName
                    state.toons.toon3.selectedGagDamage = action.payload.gagValue
                    state.toons.toon3.target = action.payload.gagTarget
                    state.toons.toon3.selectedGagTrack = action.payload.gagTrack
                    break;
                case '4':
                    state.toons.toon4.selectedGagName = action.payload.gagName
                    state.toons.toon4.selectedGagDamage = action.payload.gagValue
                    state.toons.toon4.target = action.payload.gagTarget
                    state.toons.toon4.selectedGagTrack = action.payload.gagTrack
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