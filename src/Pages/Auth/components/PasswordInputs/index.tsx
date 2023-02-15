import { useContext, useState, useEffect } from 'react'
import { Column } from '../../../../Components/shared/Column.styled'
import { AuthContext } from '../../../../Context/AuthContext'
import { AddConformPasswordHandler } from '../../../../services/SignUpServices/AddConformPasswordHandler'
import { AddPasswordHandler } from '../../../../services/SignUpServices/AddPasswordHandler'
import { FlexSection } from '../../styled/FlexSection.styled'
import { Input } from '../../styled/Input.styled'
import { CheckBox } from '../CheckBox'
import { RedFlag } from '../RedFlag'


export const PasswordInputs = () => {

    const [IsChecked, setIsChecked] = useState(false)
    const { OnPasswordChange } = AddPasswordHandler()
    const { OnConformPasswordChange } = AddConformPasswordHandler()
    const { IsConformPasswordValid, UserConformPasswordInputValue, UserPasswordInputValue, setIsConformPasswordValid } = useContext(AuthContext)

    useEffect(() => {
        if (UserConformPasswordInputValue == UserPasswordInputValue) {
            setIsConformPasswordValid(true)
        } else {
            setIsConformPasswordValid(false)
        }
    }, [UserConformPasswordInputValue, UserPasswordInputValue])


    return (
        <Column width='100%' align='flex-start' padding='10px 0'>
            <FlexSection>
                <Input
                    onChange={OnPasswordChange}
                    name='password'
                    IsValidValue={IsConformPasswordValid}
                    type={IsChecked ? "text" : "password"}
                    placeholder="Password" required
                />
                <Input
                    onChange={OnConformPasswordChange}
                    name='conform password'
                    IsValidValue={IsConformPasswordValid}
                    type={IsChecked ? "text" : "password"}
                    placeholder="Confirm Password" required
                />
            </FlexSection>


            <RedFlag display={IsConformPasswordValid ? "none" : "flex"} RedFlagMessage={'Make sure your add valid Password'} />
            <CheckBox IsChecked={IsChecked} setIsChecked={setIsChecked} />
        </Column>
    )

}
