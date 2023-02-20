import { createContext, ReactNode, useEffect, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    const [IsUserSignIn, setIsUserSignIn] = useState(true)
    const [User, setUser] = useState({})


    return (
        <GlobalContext.Provider value={{ User, setUser, IsUserSignIn, setIsUserSignIn }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider