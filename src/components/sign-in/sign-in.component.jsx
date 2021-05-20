import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    _handleSubmit = event => {
        event.preventDefault()
        this.setState({email: '', password: ''})
    }

    _handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        const {email, password} = this.state
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign-in with your email and password</span>
                <form onSubmit={this._handleSubmit}>
                    <FormInput name="email" label="email" type="email" value={email} handleChange={this._handleChange} required/>
                    <FormInput name="password" label="password" type="password" value={password} handleChange={this._handleChange} required/>
                    <CustomButton type="submit">
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn