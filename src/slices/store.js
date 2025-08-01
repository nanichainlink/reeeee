
import { configureStore } from '@reduxjs/toolkit'
import goalifySlice from "./features/tareasSlices"

export const store = configureStore({
    reducer: {
        goalify: goalifySlice
    },
})
