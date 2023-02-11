import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../../../../../Components/common/Button.styled'
import "../../../../../assets/GlobalStyles/style.css"
import { MouseEventHandler } from 'react';
interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>
}
export const BackButton = (props: Props) => {
    return (
        <Button onClick={props.onClick}>
            <FontAwesomeIcon className='post-fa-icon' icon={faArrowLeftLong} />
        </Button>
    )
}
