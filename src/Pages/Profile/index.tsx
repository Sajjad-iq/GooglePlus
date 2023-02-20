import { Wrapper } from "../../Components/shared/Wrapper"
import { CoverImages } from "../../Components/shared/CoverImages"
import CoverIMG from "../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import UserIMG from "../../assets/ICONS/ProfileImg.jpg"
import { UserInfo } from "../../Components/shared/UserInfo"
import { Posts } from "../../Components/shared/Posts"
import { FetchPostsHandler } from "../../services/AddPostServices/FetchPosts"
import { PostDisplayToggle } from "../../services/AddPostServices/PostDisplayToggle"
import { PostPreviewWindow } from "../../Components/shared/PostPreviewWindow"
import { useNavigate } from "react-router-dom"

function Profile() {
    let User = JSON.parse(localStorage.getItem('User') || "");
    const { ActivePostsToggle, IsPostsActive } = PostDisplayToggle()
    const { FetchPosts, Response, Loading } = FetchPostsHandler()
    const Navigate = useNavigate()


    return (
        <Wrapper>
            <CoverImages CoverImg={User.CoverPicture !== "" ? User.CoverPicture : CoverIMG} UserImg={User.ProfilePicture !== "" ? User.ProfilePicture : UserIMG} />
            <UserInfo
                UserName={`${User.UserName} ${User.FamilyName}`}
                UserDescription={User.Description}
                UserFollowers={User.Followers.length || "0"}
                ProfileButtonClick={() => Navigate("/Settings")}
                ProfileButtonName={"Edit Profile"}
            />
            <PostPreviewWindow
                IsActive={IsPostsActive}
                BackHandler={ActivePostsToggle}
            />
            <Posts
                IsPostsActive={false}
                Toggle={() => ""}
                Loading={Loading}
                Response={Response}
                ActivePostsToggle={ActivePostsToggle}
            />
        </Wrapper>
    )
}

export default Profile