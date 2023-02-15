import axios from 'axios'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

export const SignUpHandler = () => {

    const {
        EmailInputValue,
        FamilyNameInputValue,
        UserNameInputValue,
        UserPasswordInputValue,
        IsUserNameValid,
        IsFamilyNameValid,
        IsEmailValid,
        IsConformPasswordValid,
        setIsEmailValid
    } = useContext(AuthContext)

    const Navigate = useNavigate()


    const SignUpSubmit = async () => {
        if (IsUserNameValid && IsFamilyNameValid && IsEmailValid && IsConformPasswordValid) {
            try {
                await axios({
                    method: 'post',
                    url: "http://127.0.0.1:4000/SignUp",
                    headers: {},
                    data: {
                        UserName: UserNameInputValue,
                        FamilyName: FamilyNameInputValue,
                        Email: EmailInputValue,
                        password: UserPasswordInputValue,
                    }
                }
                ).then((res => {
                    if (res.data.IsComplied) {
                        Navigate("/SignIn")
                    } else {
                        setIsEmailValid(false)
                    }
                }))
            } catch (e) {
                console.log(e)
            }
        }
    }


    return SignUpSubmit
}
