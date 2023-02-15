import axios from "axios"
import { useState } from "react"

export const FetchPostsHandler = () => {

    const [Response, setResponse] = useState({ data: [] })
    const [Loading, setLoading] = useState(false)

    const FetchPosts = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'get',
                url: "http://127.0.0.1:4000/Posts",
                headers: {},
            }
            ).then((e: any) => setResponse(e))
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return { FetchPosts, Response, Loading }
}
