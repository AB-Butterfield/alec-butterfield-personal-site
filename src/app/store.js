import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import toonSlice from '../appSlices/toonSlice'
import cogSlice from '../appSlices/cogSlice'
import roundInfoSlice from '../appSlices/roundInfoSlice'

const store = configureStore({
    reducer: {
        toonReducer: toonSlice,
        cogReducer: cogSlice,
        roundInfoSlice: roundInfoSlice,
    },
})

export default store