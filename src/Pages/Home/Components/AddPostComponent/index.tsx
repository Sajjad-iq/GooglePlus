import { MouseEventHandler } from "react"
import { UserLogo } from "../../../../Components/common/UserLogo.styled"
import UserIcon from "../../../../assets/ICONS/ProfileImg.jpg"
import { Row } from "../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { ImageButton } from "./ImageButton"
import { PostInputComponent } from "./PostInput"
import { ToggleRow } from "./ToggleRow.styled"

interface Props {
    OpenFunction: MouseEventHandler<HTMLButtonElement>
    IsActive: boolean
}

export const AddPostComponent = (props: Props) => {
    return (
        <ToggleRow display={props.IsActive ? "flex" : "none"} width="100%" align="space-between" padding="10px">

            <Row padding="0" width="80%" align="flex-start">
                <UserLogo src={UserIcon} alt="user" />
                <PostInputComponent onFocus={props.OpenFunction} />
            </Row>

            <ImageButton onClick={props.OpenFunction} />
        </ToggleRow>

    )
}
