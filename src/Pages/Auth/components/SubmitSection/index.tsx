import { MouseEventHandler } from 'react'
import { Row } from '../../../../Components/shared/Row.styled'
import { Button } from '../../styled/Button.styled'
import { TextLink } from '../TextLink'

interface Props {
    SubmitButtonName: string
    SubmitButtonClick: MouseEventHandler
    TextLinkName: string
    TextLinkPath: string
}
export const SubmitSection = (props: Props) => {
    return (
        <Row align='space-between' padding='0' width='100%'>
            <TextLink To={props.TextLinkPath} Text={props.TextLinkName} />
            <Button onClick={props.SubmitButtonClick}>{props.SubmitButtonName}</Button>
        </Row>
    )
}
