import UserImage from '../../../../../assets/ICONS/ProfileImg.jpg'
import { SingleComment } from '../../../SingleCommint'
import { Column } from './Column.styled'

export const PostComments = () => {
    return (
        <Column width='100%' align='center' padding='unset'>
            <SingleComment UserImage={UserImage} UserName='User Name' CommentBody='This is just for testing' />
            <SingleComment UserImage={UserImage} UserName='User Name' CommentBody='This is just for testing' />
            <SingleComment UserImage={UserImage} UserName='User Name' CommentBody='This is just for testing' />
            <SingleComment UserImage={UserImage} UserName='User Name' CommentBody='This is just for testing' />
        </Column>
    )
}
