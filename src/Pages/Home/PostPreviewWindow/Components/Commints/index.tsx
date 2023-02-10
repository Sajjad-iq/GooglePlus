import { SingleComment } from '../../../../../Components/shared/SingleCommint'
import UserImage from '../../../../../assets/ICONS/ProfileImg.jpg'
import { Column } from '../../../../../Components/shared/Column.styled'

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
