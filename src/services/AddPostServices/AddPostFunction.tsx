import axios from 'axios'

export const AddPostFunction = (postBody: string, WindowClosing: any) => {

    const AddPostHandler = async () => {
        try {
            await axios({
                method: 'post',
                url: "http://127.0.0.1:4000/Posts",
                headers: {},
                data: {
                    postBody: postBody,
                    postOwner: postBody
                }
            }
            )
            WindowClosing()
        } catch (e) {
            console.log(e)
        }
    }

    return AddPostHandler
}
