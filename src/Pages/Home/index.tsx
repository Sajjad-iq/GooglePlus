import { Post } from "../../Components/shared/Post"
import { Wrapper } from "../../Components/shared/Wrapper"
import { PostDisplayToggle } from "../../services/AddPostServices/PostDisplayToggle"
import { ActiveToggle } from "../../services/AddPostServices/PostsScreenToggle"
import { AddPostComponent } from "./AddPostComponent"
import { PopUpAddPostWindow } from "./PopUpAddPostWindow"
import { PostPreviewWindow } from "./PostPreviewWindow"
import { PostToggleSection } from "./PostsToggleSection.styled"

export const Home = () => {
    const { IsPageActive, Toggle } = ActiveToggle()
    const { ActivePostsToggle, IsPostsActive } = PostDisplayToggle()

    return (
        <Wrapper>
            <AddPostComponent IsActive={IsPostsActive} OpenFunction={Toggle} />
            <PopUpAddPostWindow CloseFunction={Toggle} Display={IsPageActive ? "flex" : "none"} />
            <PostPreviewWindow BackHandler={ActivePostsToggle} IsActive={IsPostsActive} />

            <PostToggleSection display={IsPostsActive ? "flex" : "none"}>
                <Post onClick={ActivePostsToggle} />
                <Post onClick={ActivePostsToggle} />
                <Post onClick={ActivePostsToggle} />
            </PostToggleSection>
        </Wrapper>
    )
}
