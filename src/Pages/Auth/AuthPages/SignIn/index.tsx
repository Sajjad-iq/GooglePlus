import { SignInSubmitHandler } from '../../../../services/SignInServices/SignInSubmitHandler'
import { Label } from '../../components/Label'
import { AddEmailAndPassword } from '../../components/SginIn_addEmail_Password'
import { SubmitSection } from '../../components/SubmitSection'
import { SignInSection } from '../../styled/SignInSection.styled'
import { SignInWrapper } from '../../styled/SignInWrapper.styled'

export const SignIn = () => {

    const SignInSubmit = SignInSubmitHandler()

    return (
        <SignInWrapper>
            <SignInSection>
                <Label ForSignIn={true} Header='SignIn with your account' />
                <AddEmailAndPassword />
                <SubmitSection
                    SubmitButtonName='Submit'
                    SubmitButtonClick={SignInSubmit}
                    TextLinkName={"You don't have an account?"}
                    TextLinkPath={'/SignUp'}
                />
            </SignInSection>
        </SignInWrapper>
    )
}
