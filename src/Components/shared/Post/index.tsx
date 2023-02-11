import { Row } from "../../../Components/shared/Row.styled"
import { PostWrapper } from "./styled/PostWrapper.styled"
import UserIcon from "../../../assets/ICONS/ProfileImg.jpg"
import { P } from "./styled/P.styled"
import { PostBody } from "./styled/PostBody.styled"
import { Text } from "./styled/Text.styled"
import { PostImg } from "./styled/PostImg.styled"
import test from "../../../assets/ICONS/Photos/marguerite-729510__340.jpg"
import { Like } from "./Like"
import { CommentsButton } from "./Comments"
import { Share } from "./Share"
import { UserName } from "../../common/UserName.styled"
import { MouseEventHandler } from "react"
import { UserLogo } from "../../common/UserLogo.styled"


interface Props {
    onClick: MouseEventHandler<HTMLSelectElement>
    IsPostPreview: boolean
}

export const Post = (props: Props) => {

    return (
        <PostWrapper IsPostPreview={props.IsPostPreview}>
            <Row padding="10px" align="space-between" width="100%">
                <Row padding="0" align="center" width="auto">
                    <UserLogo src={UserIcon} alt="User Photo" />
                    <UserName IsCommentUserName={false}>User Name</UserName>
                    <P>Public</P>
                </Row>
                <P>1h</P>
            </Row>

            <PostBody onClick={props.onClick}>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, magnam, beatae modi accusamus quod fuga nihil vel cupiditate iste, harum eaque ipsam eius maiores. Nihil vitae repellat beatae facilis!</Text>
                <PostImg loading={"lazy"} src={test} alt="post img" />
            </PostBody>

            <Row padding="10px" align="space-between" width="100%">

                <Like />

                <Row padding="0" align="center" width="auto">
                    <CommentsButton onClick={props.onClick} />
                    <Share />
                </Row>
            </Row>
        </PostWrapper>
    )
}
