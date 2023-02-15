import { AddEmailHandler } from '../../../../services/SignUpServices/AddEmailHandler'
import { FlexSection } from '../../styled/FlexSection.styled'
import { Input } from '../../styled/Input.styled'
import { RedFlag } from '../RedFlag'

export const EmailInput = () => {
    const { OnEmailChange, IsEmailValid } = AddEmailHandler()

    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <FlexSection>
                <Input onChange={OnEmailChange} name='add-email' IsValidValue={IsEmailValid} type={"email"} placeholder="Email" required />
            </FlexSection>
            <RedFlag display={IsEmailValid ? "none" : "flex"} RedFlagMessage={'you might be using an existing email or an invalid email'} />
        </div>

    )
}
