import { PostBody } from "./styled/PostBody.styled"
import { WindowWrapper } from "./styled/WindowWrapper"
import { Row } from "../../../Components/shared/Row.styled"
import { Form } from "./styled/Form.styled"
import { ProfileImageAndPostState } from "./Components/ProfileImageAndPostState"
import { DragEventHandler, MouseEventHandler } from "react"
import { SendButton } from './Components/SendButton'
import { TextArea } from "./Components/TextArea"
import { Exit } from "./Components/Exit"
import { AddImage } from "./Components/AddImage"

interface Props {
    Display: string
    CloseFunction: MouseEventHandler<HTMLButtonElement>
}

export const PopUpAddPostWindow = (props: Props) => {

    return (
        <WindowWrapper display={props.Display}>
            <PostBody>
                <Row padding="10px" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <Exit onClick={props.CloseFunction} />
                </Row>

                <Form>
                    <TextArea />
                </Form>

                <Row padding="10px" align="space-between" width="100%">
                    <AddImage />

                    <SendButton />
                </Row>
            </PostBody>
        </WindowWrapper>
    )
}
