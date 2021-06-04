import React, {useState} from "react";
import {connect} from "react-redux";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {emailSignInStart, googleSignInStart} from "../../redux/user/user.actions";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {selectUser} from "../../redux/user/user.selectors";

const SignIn = ({userState, googleSignInStart, emailSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const {email, password} = userCredentials

    const _handleChange = event => {
        const {value, name} = event.target
        setCredentials({...userCredentials, [name]: value})
    }

    if (userState.error) {
        withReactContent(Swal).fire({
            icon: 'error',
            html: '<h3>The credentials are incorrect</h3><strong>Please try again!</strong>',
        })
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign-in with your email and password</span>
            <FormInput name="email" label="email" type="email" value={email} handleChange={_handleChange}
                       required/>
            <FormInput name="password" label="password" type="password" value={password}
                       handleChange={_handleChange} required/>
            <div className="buttons">
                <CustomButton type="button" onClick={() => emailSignInStart(email, password)}>Sign in</CustomButton>
                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with
                    Google</CustomButton>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})

const mapStateToProps = (state) => ({
    userState: selectUser(state)
})


export default connect(mapStateToProps, mapDispatchToProps)(SignIn)