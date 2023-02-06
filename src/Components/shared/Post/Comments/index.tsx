import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row } from '../../Row.styled'
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import "../../../../assets/GlobalStyles/faStyle.css"
import { Colors } from '../../../../assets/Colors';
import { PostButton } from '../../../common/PostButton.styled';
import { Count } from '../../../common/Count.styled';

export const CommentsButton = () => {
    return (
        <Row padding='5px' width='auto' align='center'>
            <PostButton
                color={Colors.Secoundry.gray}
                backgroundColor={Colors.Primary.Lightgray}
            >
                <FontAwesomeIcon className='fa-Post-icon' icon={faMessage} />
            </PostButton>

            <Count>1</Count>
        </Row>
    )
}
