import React from 'react'
import { Label } from '../../styled/Label.styled'
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css'
import { RedFlagComment } from '../../styled/RedFlagComment.styled';

interface Props {
    display: string
    RedFlagMessage: string
}
export const RedFlag = (props: Props) => {
    return (
        <Label style={{ display: props.display }}>
            <FontAwesomeIcon className='fa-error' icon={faCircleExclamation} />
            <RedFlagComment>{props.RedFlagMessage}</RedFlagComment>
        </Label>
    )
}
