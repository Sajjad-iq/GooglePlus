import React from 'react'
import { Button } from '../styled/Button.styled'
import { ToggleColumn } from '../styled/ToggleColumn.styled'

interface Props {
    IsActive: boolean
}
export const OptionsWindow = (props: Props) => {
    return (
        <ToggleColumn display={props.IsActive ? "none" : "flex"} width='fit-content' align='center' padding='unset'>
            <Button isLastOne={false}>Delete</Button>
            <Button isLastOne={false}>Mute</Button>
            <Button isLastOne={true}>Report</Button>
        </ToggleColumn>

    )
}
