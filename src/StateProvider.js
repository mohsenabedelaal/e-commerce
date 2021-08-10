import React from 'react';
//Setup data layer ( setup react context API)
// We need this to track the basket

import { createContext, useContext, useReducer } from "react";

//This is the data layer
export const StateContext = createContext();

//Build a Provider ( put all the app inside this )

export const StateProvider = ({reducer , initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

//This is how we use it in the component
export const useStateValue = () => useContext(StateContext);