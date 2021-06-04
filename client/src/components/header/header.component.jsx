import React from "react";
import {withRouter} from "react-router";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import './header.styles.scss'

import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";
import {HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink} from "./header.styles";
import {signOutStart} from "../../redux/user/user.actions";

const Header = ({currentUser, signOutStart, cartDropdownHidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {currentUser ? <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv> :
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))