import React, { createContext, useState } from 'react'
export const AuthContext  = createContext()
const initState = {
   isAuth:false,
   token:null
}
const AuthContextProvider = ({children})=>{
   const [authState, setAuthState] = useState(initState)
   const handleLogin = ()=>{}
   const handleLogout = ()=>{}
    return (
        <AuthContext.Provider value={{authState, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;