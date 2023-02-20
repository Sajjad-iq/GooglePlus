import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../../Context/AuthContext"
import { GlobalContext } from "../../Context/GlobalContext"
import { useNavigate } from 'react-router-dom';

export const SignInSubmitHandler = () => {

    const { SignInEmailInputValue, SignInPasswordInputValue, setSignInEmailAndPasswordValid } = useContext(AuthContext)
    const { setIsUserSignIn, IsUserSignIn } = useContext(GlobalContext)
    const Navigate = useNavigate()


    const SignInSubmit = async () => {
        if (SignInEmailInputValue !== "" && SignInPasswordInputValue !== "") {
            try {
                await axios({
                    method: 'post',
                    url: "http://localhost:4000/api/SignIn",
                    headers: {},
                    data: {
                        Email: SignInEmailInputValue,
                        Password: SignInPasswordInputValue
                    }
                }
                ).then(res => {
                    setIsUserSignIn(!IsUserSignIn)
                    Navigate('/')
                    localStorage.setItem('User', JSON.stringify(res.data.User) || "");
                })
            } catch (e) {
                console.log(e)
                setSignInEmailAndPasswordValid(false)
            }
        }

    }
    return SignInSubmit
}
