import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState:{
       user:{
        login: null,
        password: null,
        isAuth: false,
    },
    },
    reducers:{
        addLogin(state,action){
            state.user.login = action.payload.login
            state.user.password = action.payload.password
            state.user.isAuth = !state.user.isAuth;
        },
        addLogout(state,action){
            state.user.isAuth = action.payload
        }
    }
})

export const { addLogin,addLogout } = authSlice.actions

export default authSlice.reducer