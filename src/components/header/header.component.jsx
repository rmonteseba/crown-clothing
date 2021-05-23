import React from "react";
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {withRouter} from "react-router";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.scss'

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart-dropdown/cart-dropdown.selectors";

const _handleLogout = (history) => (auth.signOut().then(() => history.push("/")))

const Header = ({currentUser, history, cartDropdownHidden}) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>SHOP</Link>
                <Link className="option" to='/shop'>CONTACT</Link>
                {currentUser ? <div className='option' onClick={() => _handleLogout(history)}>SIGN OUT</div> :
                    <Link className="option" to='/signin'>LOGIN</Link>}
                <CartIcon/>
            </div>
            {(cartDropdownHidden) ? null : <CartDropdown/>}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden,
})

export default withRouter(connect(mapStateToProps)(Header))