import { UserLogo } from '../../common/UserLogo.styled'
import { Row } from '../Row.styled'
import { UserName } from '../../common/UserName.styled'
import { Column } from '../Column.styled'
import { CommentBody } from './CommentBody.styled'

interface Props {
    UserImage: string
    UserName: string
    CommentBody: string
}
export const SingleComment = (props: Props) => {
    return (
        <Row width='100%' padding='10px' align='flex-start'>
            <UserLogo src={props.UserImage} loading={"lazy"} alt='comment image label' />
            <Column width='100%' padding='3px' align='flex-start'>
                <UserName IsCommentUserName={true} >{props.UserName}</UserName>
                <CommentBody>{props.CommentBody}</CommentBody>
            </Column>
        </Row>
    )
}
