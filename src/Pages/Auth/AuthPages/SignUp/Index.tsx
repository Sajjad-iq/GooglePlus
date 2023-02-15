import { Wrapper } from '../../styled/Wrapper'
import { SignUpSection } from '../../styled/SignUpSection.styled'
import { UserNameInput } from '../../components/UserNameInputs'
import { EmailInput } from '../../components/EmailInput'
import { PasswordInputs } from '../../components/PasswordInputs'
import { Label } from '../../components/Label'
import { SubmitSection } from '../../components/SubmitSection'
import { SignUpHandler } from '../../../../services/SignUpServices/SignUpHandler'

export const SignUp = () => {
  const SignUpSubmit = SignUpHandler()
  return (
    <Wrapper>
      <SignUpSection>

        <Label ForSignIn={false} Header='Create Your Account' />
        <UserNameInput />
        <EmailInput />
        <PasswordInputs />
        <SubmitSection
          SubmitButtonName='Submit'
          SubmitButtonClick={SignUpSubmit}
          TextLinkName={"SignIn Instead"}
          TextLinkPath={'/SignIn'}
        />

      </SignUpSection>
    </Wrapper>
  )
}
