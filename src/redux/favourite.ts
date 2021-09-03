import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
    favouriteList: [] as Array<number>
}

const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<number>) => {
            state.favouriteList = [...state.favouriteList, action.payload];
        },
        removeFav: (state, action: PayloadAction<number>) => {
            state.favouriteList = state.favouriteList.filter(id => id !== action.payload);
        }
    },
})

export const { addFav, removeFav } = favouriteSlice.actions;
export const getFavourites = (state: RootState) => state.favouriteSlice.favouriteList;
export default favouriteSlice.reducer;