import React, { createContext, useEffect, useState } from "react";
import buffer from "../utils/buffer";
import jwtVerify from "../utils/jwt";


const Context = createContext()

const CurrenteProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(undefined)
    const getUser = () => {
        return (buffer.decoded(jwtVerify.getToken(), 'utf-8'))
    }

    useEffect(() => {
        setCurrentUser(getUser())
    }, [])
    return (
        <Context.Provider value={{ currentUser }}>
            {children}
        </Context.Provider>
    )
}


export { Context, CurrenteProvider }