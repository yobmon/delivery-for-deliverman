import { createContext, useContext , useReducer} from "react";
export const Statecontext = createContext();
export const Contextprov=({initial,reducer,children})=>(
    <Statecontext.Provider value= { useReducer(reducer,initial )}>

            {children}

    </Statecontext.Provider>

)


export const Contextvalue=() =>useContext(Statecontext);





