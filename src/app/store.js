import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducer'
import toonSlice from '../appSlices/toonSlice'
import cogSlice from '../appSlices/cogSlice'

const store = configureStore({
    reducer: {
        toonReducer: toonSlice,
        cogReducer: cogSlice
    },
})

export default store