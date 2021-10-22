import React, { createContext, useState } from "react";


const Context = createContext()

const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)


    return (
        <Context.Provider value={{ authenticated }}>
            {children}
        </Context.Provider>
    )

}


export { Context, AuthProvider }