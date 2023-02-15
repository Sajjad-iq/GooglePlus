import { CheckInput } from '../../styled/CheckInput.styled'
import { Label } from '../../styled/Label.styled'
import { P } from '../../styled/P.styled'

interface Props {
    IsChecked: boolean
    setIsChecked: any
}
export const CheckBox = (props: Props) => {
    return (
        <Label>
            <CheckInput type={"checkbox"} onChange={() => props.setIsChecked(!props.IsChecked)} />
            <P>Show Password</P>
        </Label>
    )
}
