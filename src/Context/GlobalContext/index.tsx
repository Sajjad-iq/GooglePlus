import { createContext, ReactNode, useState } from 'react'

type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    const [IsUserSignIn, setIsUserSignIn] = useState(false)

    return (
        <GlobalContext.Provider value={{ IsUserSignIn, setIsUserSignIn }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider