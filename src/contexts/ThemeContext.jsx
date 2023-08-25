/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({children})=>{
    const [isDark,setIsDark] = useState(false)

    const changeThemeHandler=()=>{
        setIsDark(!isDark)
    }
    return(
        <ThemeContext.Provider value={{isDark,changeThemeHandler}}>
            {children}
                {isDark &&(
                    <style>
                        {`
                        body{
                            background-color:black;
                            color:#fff;
                        }
                        `}
                    </style>
                )}
        </ThemeContext.Provider>
    )
}
export default ThemeProvider;