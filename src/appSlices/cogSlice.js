import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    cogs: {
        cog1: {
            active: true,
            maxHp: 25,
            currentHp: 25,
            level: 4,
            name: "Cog-1"
        },
        cog2: {
            active: true,
            maxHp: 25,
            currentHp: 25,
            level: 4,
            name: "Cog-1"
        },
        cog3: {
            active: true,
            maxHp: 25,
            currentHp: 25,
            level: 4,
            name: "Cog-1"
        },
        cog4: {
            active: true,
            maxHp: 25,
            currentHp: 25,
            level: 4,
            name: "Cog-1"
        }
    }
}

export const cogSlice = createSlice({
    name: 'cog',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        }

    }
})

export const increment = cogSlice.actions

export default cogSlice.reducer