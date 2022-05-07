import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:'theme',
    initialState:{
        theme:null,
    },
    reducers:{
        addTheme(state,action){
            state.theme = action.payload
        },
    },
})

export const {addTheme}=themeSlice.actions

export default themeSlice.reducer