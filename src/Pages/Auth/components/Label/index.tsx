import React from 'react'
import { Header } from '../../styled/Header.styled'
import { LabelWrapper } from '../../styled/LabelWrapper.styled'
import { LOGO } from '../../styled/LOGO.styled'

interface Props {
    Header: string
    ForSignIn: boolean
}
export const Label = (props: Props) => {
    return (
        <LabelWrapper forSignIn={props.ForSignIn}>
            <LOGO>Google Plus</LOGO>
            <Header>
                {props.Header}
            </Header>
        </LabelWrapper>
    )
}
