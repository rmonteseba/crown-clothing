import React, {useState} from "react";
import {connect} from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './sign-up.styles.scss'
import {signUpStart} from "../../redux/user/user.actions";

const SignUp = ({signUp}) => {

    const [userCredentials, setCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const {displayName, email, password, confirmPassword} = userCredentials

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password === confirmPassword) {
            signUp({displayName, email, password})
        } else {
            await withReactContent(Swal).fire({
                icon: 'error',
                html: '<h3>The passwords doesn\'t match!</h3>',
                footer: 'Please try again'
            })
        }
    }

    const handleChange = (event) => setCredentials({...userCredentials, [event.target.name]: event.target.value})

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange}
                           label="Display name" required/>
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email"
                           required/>
                <FormInput type="password" name="password" value={password} onChange={handleChange}
                           label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword}
                           onChange={handleChange}
                           label="Confirm password" required/>
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export const mapDispatchToProps = (dispatch) => ({
    signUp: (data) => dispatch(signUpStart(data))
})

export default connect(null, mapDispatchToProps)(SignUp)