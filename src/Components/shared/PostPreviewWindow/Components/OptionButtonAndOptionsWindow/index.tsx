import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../../../../assets/GlobalStyles/style.css"
import { Row } from './styled/Row.styled'
import { OptionsWindow } from './OptionsWindow'
import { useState } from 'react'
import { Button } from '../../../../common/Button.styled'

export const OptionButtonAndOptionsWindow = () => {
    const [IsActive, setIsActive] = useState(false)
    return (
        <Row width='fit-content' align='flex-start' padding='10px'>
            <Button onClick={() => setIsActive(!IsActive)}>
                <FontAwesomeIcon className='post-fa-icon' icon={faEllipsisVertical} />
            </Button>
            <OptionsWindow IsActive={IsActive} />
        </Row>
    )
}
