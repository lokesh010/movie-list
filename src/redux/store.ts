import { configureStore } from '@reduxjs/toolkit'
import favouriteSlice from 'redux/favourite'

const store = configureStore({
    reducer: {
        favouriteSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store;