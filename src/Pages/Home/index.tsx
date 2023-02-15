import { Wrapper } from "../../Components/shared/Wrapper"
import { PostDisplayToggle } from "../../services/AddPostServices/PostDisplayToggle"
import { ActiveToggle } from "../../services/AddPostServices/PostsScreenToggle"
import { FetchPostsHandler } from "../../services/AddPostServices/FetchPosts"
import { useEffect } from "react"
import { PostPreviewWindow } from "./Components/PostPreviewWindow"
import { PopUpAddPostWindow } from "./Components/PopUpAddPostWindow"
import { Posts } from "./Components/Posts"


export const Home = () => {

    const { IsPageActive, Toggle } = ActiveToggle()
    const { ActivePostsToggle, IsPostsActive } = PostDisplayToggle()
    const { FetchPosts, Response, Loading } = FetchPostsHandler()

    useEffect(() => {
        FetchPosts()
    }, [IsPageActive])

    return (

        <Wrapper>
            <PopUpAddPostWindow CloseFunction={Toggle} Display={IsPageActive ? "flex" : "none"} />
            <PostPreviewWindow BackHandler={ActivePostsToggle} IsActive={IsPostsActive} />
            <Posts
                IsPostsActive={IsPostsActive}
                Toggle={Toggle}
                Loading={Loading}
                Response={Response}
                ActivePostsToggle={ActivePostsToggle}
            />
        </Wrapper>

    )
}
