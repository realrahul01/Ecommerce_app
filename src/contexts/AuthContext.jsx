/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({children})=>{
const [isUserLogin,setIsUserLogin] = useState(false)

const loginHandler=()=>{
    setIsUserLogin(true)
}
const LogoutHandler=()=>{
    setIsUserLogin(false)
}
    return(
        <AuthContext.Provider value={{isUserLogin,loginHandler,LogoutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;