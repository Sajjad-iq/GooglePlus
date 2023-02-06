import { MouseEventHandler } from "react"
import UserIcon from "../../../assets/ICONS/ProfileImg.jpg"
import { UserLogo } from "../../../Components/common/UserLogo.styled"
import { Row } from "../../../Components/shared/Row.styled"
import { PostInputComponent } from "./PostInput"
import { ToggleRow } from "./ToggleRow.styled"

interface Props {
    OpenFunction: MouseEventHandler<HTMLButtonElement>
    IsActive: boolean
}

export const AddPostComponent = (props: Props) => {
    return (
        <ToggleRow display={props.IsActive ? "flex" : "none"} width="100%" align="center" padding="10px">
            <UserLogo src={UserIcon} alt="user" />
            <PostInputComponent onFocus={props.OpenFunction} />
        </ToggleRow>

    )
}
