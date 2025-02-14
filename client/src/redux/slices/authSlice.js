import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")): null,
    isSidebarOpen: false,

};

//This is authsice, work n understadning this more 
//I hope this gets over by tomorrow itself 
c

const authSlice = {
    name: "authSlice",
    initialState,
    reducers: {

        setCredentials: (state,actions) =>{
            state.user = state.payload;
            localStorage.setItem("userInfo", JSON.stringify(actions.payload));
        },
        logout: (state,actions) =>  {
            state.user = null;            
            localStorage.removeItem("userInfo")
        },
        setSidebarOpen:(state,actions) =>{
            state.isSidebarOpen = actions.payload;

        },

    }
}

export const {setCredentials,logout,setSidebarOpen} = authSlice.actions;

export default authSlice.reducers;