import { createContext, ReactNode, useEffect, useState } from 'react'

export const def = {
    _id: "63f4e27af1beb9908d101691",
    PostBody: "",
    PostOwnerName: "",
    PostOwnerId: "63f4da48ca2cffc302583660",
    PostImage: "",
    Likes: [],
    Comments: [],
}

type ProviderChildrenType = {
    children: ReactNode
}

export const GlobalContext = createContext<any>([])

const GlobalContextProvider = ({ children }: ProviderChildrenType) => {

    const [PostPreviewRefresh, setPostPreviewRefresh] = useState(true)
    const [HomeReFresh, setHomeReFresh] = useState(true)
    const [User, setUser] = useState({})
    const [PostData, setPostData] = useState(def)



    return (
        <GlobalContext.Provider value={{ User, setUser, PostData, setPostData, PostPreviewRefresh, setPostPreviewRefresh, HomeReFresh, setHomeReFresh }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider