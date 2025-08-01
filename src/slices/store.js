import { configureStore } from '@reduxjs/toolkit'
import tareasSlice from "./features/tareasSlices"
export const store = configureStore({
    reducer: {
        tareasSlice
    },
})