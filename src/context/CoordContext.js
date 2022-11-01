import { createContext, useContext, useState } from "react";

const CoordContext = createContext()

export const CityProvider = ({children})=>{
    const [coord,setCity] = useState('')
    const values = {coord,setCity}
    return<CoordContext.Provider value={values}>
        {children}
    </CoordContext.Provider>
}

export const useCity =()=>useContext(CoordContext)