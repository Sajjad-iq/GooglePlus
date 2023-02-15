import UserIcon from "../../../../../../assets/ICONS/ProfileImg.jpg"

import { PostStateSelectors } from '../PostStateSelectors'
import { UserLogo } from '../../../../../../Components/common/UserLogo.styled'
import { UserName } from '../../../../../../Components/common/UserName.styled'
import { Column } from '../../../PostPreviewWindow/Components/Commints/Column.styled'
import { Row } from '../../../PostPreviewWindow/Components/OptionButtonAndOptionsWindow/styled/Row.styled'

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