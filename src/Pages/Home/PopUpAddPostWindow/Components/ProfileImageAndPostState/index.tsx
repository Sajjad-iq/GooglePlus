import { UserLogo } from '../../../../../Components/common/UserLogo.styled'
import { Row } from '../../../../../Components/shared/Row.styled'
import { P } from '../../styled/P.styled'
import UserIcon from "../../../../../assets/ICONS/ProfileImg.jpg"
import { Column } from '../../../../../Components/shared/Column.styled'
import { UserName } from '../../../../../Components/common/UserName.styled'
import { PostStateSelectors } from '../PostStateSelectors'

export const ProfileImageAndPostState = () => {
    return (
        <Row padding="0" align="center" width="auto">
            <UserLogo src={UserIcon} alt="User Photo" />

            <Column padding="0" align="flex-start" width="auto">
                <UserName IsCommentUserName={false}>User Name</UserName>
                <PostStateSelectors />
            </Column>
        </Row>
    )
}
