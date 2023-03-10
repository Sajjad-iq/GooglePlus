import axios from "axios"
import { useState } from "react"
import { def } from "../../Context/GlobalContext"

export const FetchPostsHandler = () => {

    const [Loading, setLoading] = useState(false)
    const [Response, setResponse] = useState([def])



    const FetchPosts = async () => {
        try {
            setLoading(true)
            await axios({
                method: 'get',
                url: "http://127.0.0.1:4000/api/Posts",
                headers: {},
            }
            ).then((e: any) => {
                setResponse(e.data.reverse())
            })
        } catch (e) {
            console.log(e)
        } finally {
            setLoading(false)
        }
    }

    return { FetchPosts, Response, Loading }
}
