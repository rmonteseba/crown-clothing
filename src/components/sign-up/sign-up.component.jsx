import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if (password === confirmPassword) {
            try {
                const {user} = await auth.createUserWithEmailAndPassword(email, password)
                await createUserProfileDocument(user, {displayName});
                this.setState({
                    displayName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
            } catch (error) {
                withReactContent(Swal).fire({
                    icon: 'error',
                    html: '<h3>Oops!, there was a problem with your registration!</h3><strong>Please try again! 🙏</strong>',
                    footer: 'Sorry for the inconvenience!'
                })
            }
        } else {
            withReactContent(Swal).fire({
                icon: 'error',
                html: '<h3>The passwords doesn\'t match!</h3>',
                footer: 'Please try again'
            })
        }

    }

    handleChange = (event) => this.setState({[event.target.name]: event.target.value})

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange}
                               label="Display name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email"
                               required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange}
                               label="Password" required/>
                    <FormInput type="password" name="confirmPassword" value={confirmPassword}
                               onChange={this.handleChange}
                               label="Confirm password" required/>
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp