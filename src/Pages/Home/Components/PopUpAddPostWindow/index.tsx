import { PostBody } from "./styled/PostBody.styled"
import { WindowWrapper } from "./styled/WindowWrapper"
import { Form } from "./styled/Form.styled"
import { ProfileImageAndPostState } from "./Components/ProfileImageAndPostState"
import { SendButton } from './Components/SendButton'
import { TextArea } from "./Components/TextArea"
import { Exit } from "./Components/Exit"
import { AddPostFunction } from "../../../../services/AddPostServices/AddPostFunction"
import { PostStatesAndSetStatesHandlers } from "../../../../services/AddPostServices/PostStatesAndSetStatesHandlers"
import { Row } from "../../../../Components/shared/PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled"
import { AddImage } from "../../../../Components/shared/AddImage"

interface Props {
    Display: string
    CloseFunction: any
}

export const PopUpAddPostWindow = (props: Props) => {

    const { Textfield, TextChange } = PostStatesAndSetStatesHandlers()
    const AddPostHandler = AddPostFunction(Textfield, props.CloseFunction)

    return (
        <WindowWrapper display={props.Display}>
            <PostBody>
                <Row padding="10px" align="space-between" width="100%">
                    <ProfileImageAndPostState />
                    <Exit onClick={props.CloseFunction} />
                </Row>

                <Form>
                    <TextArea onChange={TextChange} />
                </Form>

                <Row padding="10px" align="space-between" width="100%">
                    <AddImage />
                    <SendButton Click={AddPostHandler} />
                </Row>
            </PostBody>
        </WindowWrapper>
    )
}
