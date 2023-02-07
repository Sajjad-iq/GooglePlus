import { Colors } from '../../../../assets/Colors'
import { Count } from '../../../../Components/common/Count.styled'
import { PostButton } from '../../../../Components/common/PostButton.styled'
import { Row } from '../../../../Components/shared/Row.styled'
import { ActiveToggle } from '../../../../services/AddPostServices/PostsScreenToggle'

export const Like = () => {

    const { IsPageActive, Toggle } = ActiveToggle()

    return (
        <Row padding='0' width='auto' align='center'>
            <PostButton
                color={IsPageActive ? Colors.Primary.white : Colors.Secoundry.gray}
                backgroundColor={IsPageActive ? Colors.Primary.red : Colors.Primary.Lightgray}
                onClick={Toggle}
            >+1</PostButton>
            <Count>1</Count>
        </Row>

    )
}
