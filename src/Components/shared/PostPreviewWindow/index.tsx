import { MouseEventHandler } from 'react'
import { BackButton } from '../BackButton'
import { Post } from '../Post'
import { PostComments } from './Components/Commints'
import { OptionButtonAndOptionsWindow } from './Components/OptionButtonAndOptionsWindow'
import { Row } from './Components/OptionButtonAndOptionsWindow/styled/Row.styled'
import { ToggleColumn } from './styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    BackHandler: MouseEventHandler
}
export const PostPreviewWindow = (props: Props) => {
    return (
        <ToggleColumn display={props.IsActive ? "none" : "flex"} width='100%' align='center' padding='unset'>
            <Row width='100%' align='space-between' padding='10px'>
                <BackButton onClick={props.BackHandler} />
                <OptionButtonAndOptionsWindow />
            </Row>
            <Post IsPostPreview={true} onClick={() => ""} PostBody={''} />
            <PostComments />
        </ToggleColumn>
    )
}
