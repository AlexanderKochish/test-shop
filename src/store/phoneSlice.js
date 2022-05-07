import { createSlice } from "@reduxjs/toolkit";
import { phones} from '../DataBase/DB'
import { desktops } from "../DataBase/DB";

const phonesSlise=createSlice({
    name:'phones',
    initialState:{
        phones:[...phones],
        desktops:[...desktops],
        phonesCard:[],
        menu: false,
    },
    reducers:{
        //################reducers phones#############################
        addPhones(state,action){
            state.phonesCard.push(action.payload)
        },
        deletePhones(state,action){
            state.phonesCard = state.phonesCard.filter((phone)=>phone.id !== action.payload)
        },
        searchPhones(state,action){
            state.phones = state.phones.filter((search)=>search.title.toLowerCase().includes(action.payload))
        },
        setMenu(state,action){
            state.menu = action.payload
        },
        //#################reducers desktops############################
        addDesktop(state,action){
            state.phonesCard.push(action.payload)
        },
        deleteDesktop(state,action){
            state.phonesCard = state.phonesCard.filter((desktop)=>desktop.id !== action.payload)
        },
        searchDesktop(state,action){
            state.desktops = state.desktops.filter((search)=>search.title.toLowerCase().includes(action.payload))
        },
    }
})

export const {
    addPhones,
    deletePhones,
    searchPhones,
    setMenu,
    addDesktop,
    deleteDesktop,
    searchDesktop
} = phonesSlise.actions

export default phonesSlise.reducer