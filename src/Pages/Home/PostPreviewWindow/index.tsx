import { MouseEventHandler } from 'react'
import { Post } from '../../../Components/shared/Post'
import { Row } from '../../../Components/shared/Row.styled'
import { BackButton } from './Components/BackButton'
import { PostComments } from './Components/Commints'
import { ToggleColumn } from './styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
    BackHandler: MouseEventHandler
}
export const PostPreviewWindow = (props: Props) => {
    return (
        <ToggleColumn display={props.IsActive ? "none" : "flex"} width='100%' align='center' padding='unset'>
            <Row width='100%' align='flex-start' padding='10px'>
                <BackButton onClick={props.BackHandler} />
            </Row>
            <Post IsPostPreview={true} onClick={() => ""} />
            <PostComments />
        </ToggleColumn>
    )
}
