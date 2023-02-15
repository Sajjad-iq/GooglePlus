import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { GlobalContext } from "../../Context/GlobalContext"
import { useNavigate } from 'react-router-dom';

export const SignInSubmitHandler = () => {

    const { SignInEmailInputValue, SignInPasswordInputValue, setSignInEmailAndPasswordValid } = useContext(AuthContext)
    const { setIsUserSignIn } = useContext(GlobalContext)
    const Navigate = useNavigate()


    const SignInSubmit = async () => {
        try {
            await axios({
                method: 'put',
                url: "http://localhost:4000/SignIn",
                headers: {},
                data: {
                    email: SignInEmailInputValue,
                    password: SignInPasswordInputValue
                }
            }
            ).then(res => {
                if (res.data.isValid) {
                    setSignInEmailAndPasswordValid(true)
                    setIsUserSignIn(true)
                    Navigate('/Home')
                } else {
                    setSignInEmailAndPasswordValid(false)
                }
            })
        } catch (e) {
            console.log(e)

        }
    }
    return SignInSubmit
}
