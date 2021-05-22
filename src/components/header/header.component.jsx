import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {withRouter} from "react-router";

import {ReactComponent as Logo} from "../../assets/crown.svg"

import './header.styles.scss'

const _handleLogout = (history) => (auth.signOut().then(() => history.push("/")))

const Header = ({currentUser, history}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                <Link className="option" to='/signin'>LOGIN</Link>
                {currentUser ? <div className='option' onClick={() => _handleLogout(history)}>SIGN OUT</div> :
                    <Link className="option" to='/signin'>LOGIN</Link>}
            </div>
        </div>
    )
}

export default withRouter(Header)