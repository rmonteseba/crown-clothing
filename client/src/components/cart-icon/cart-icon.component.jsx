import React from "react";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss'
import {toggleCartDropdown} from "../../redux/cart/cart.actions";
import {connect} from "react-redux";

import {selectCartItemsCount} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

const CartIcon = ({toggleCartDropdown, cartTotalItems}) => (
    <div onClick={toggleCartDropdown} className="cart-icon">
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartTotalItems}</span>
    </div>)


const mapStateToProps = createStructuredSelector({cartTotalItems: selectCartItemsCount})

const mapDispatchToProps = (dispatch) => ({toggleCartDropdown: () => dispatch(toggleCartDropdown())})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)