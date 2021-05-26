import React from "react";
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
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.styles";

const _handleLogout = (history) => (auth.signOut().then(() => history.push("/")))

const Header = ({currentUser, history, cartDropdownHidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {currentUser ? <OptionDiv onClick={() => _handleLogout(history)}>SIGN OUT</OptionDiv> :
                    <OptionLink to='/signin'>LOGIN</OptionLink>}
                <CartIcon/>
            </OptionsContainer>
            {(cartDropdownHidden) ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartDropdownHidden: selectCartHidden,
})

export default withRouter(connect(mapStateToProps)(Header))