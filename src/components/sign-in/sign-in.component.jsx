import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import {withRouter} from "react-router-dom";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    _handleSubmit = async event => {
        event.preventDefault()
        const {email, password} = this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
            this.props.history.push("/")
        } catch (error) {
            withReactContent(Swal).fire({
                icon: 'error',
                html: '<h3>The credentails are incorrect</h3><strong>Please try again!</strong>',
            })
        }
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
                    <FormInput name="email" label="email" type="email" value={email} handleChange={this._handleChange}
                               required/>
                    <FormInput name="password" label="password" type="password" value={password}
                               handleChange={this._handleChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} className='google-sign-in'>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignIn)