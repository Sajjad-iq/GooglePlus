import { Post } from "../../Components/shared/Post"
import { Wrapper } from "../../Components/shared/Wrapper"
import { PostDisplayToggle } from "../../services/AddPostServices/PostDisplayToggle"
import { ActiveToggle } from "../../services/AddPostServices/PostsScreenToggle"
import { AddPostComponent } from "./AddPostComponent"
import { PopUpAddPostWindow } from "./PopUpAddPostWindow"
import { PostPreviewWindow } from "./PostPreviewWindow"
import { PostToggleSection } from "./styled/PostsToggleSection.styled"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


export const Home = () => {
    const { IsPageActive, Toggle } = ActiveToggle()
    const { ActivePostsToggle, IsPostsActive } = PostDisplayToggle()

    return (

        <Wrapper>
            <PopUpAddPostWindow CloseFunction={Toggle} Display={IsPageActive ? "flex" : "none"} />
            <PostPreviewWindow BackHandler={ActivePostsToggle} IsActive={IsPostsActive} />

            <PostToggleSection display={IsPostsActive ? "block" : "none"}>
                < ResponsiveMasonry
                    columnsCountBreakPoints={{ 768: 1, 1023: 2 }}
                >
                    <Masonry >
                        <AddPostComponent IsActive={IsPostsActive} OpenFunction={Toggle} />
                        <Post key={1} onClick={ActivePostsToggle} />
                        <Post key={2} onClick={ActivePostsToggle} />
                        <Post key={3} onClick={ActivePostsToggle} />
                        <Post key={4} onClick={ActivePostsToggle} />
                        <Post key={5} onClick={ActivePostsToggle} />
                        <Post key={6} onClick={ActivePostsToggle} />
                    </Masonry>
                </ResponsiveMasonry >
            </PostToggleSection>
        </Wrapper>

    )
}
{/* 
 */}