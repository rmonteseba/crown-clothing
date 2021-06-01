import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import './cart-dropdown.styles.scss'
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {createStructuredSelector} from "reselect";
import {withRouter} from "react-router-dom";
import {toggleCartDropdown} from "../../redux/cart/cart.actions";

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id}
                                                                         item={cartItem}></CartItem>) :
                    <h3 className="empty-message">The cart is empty!</h3>
            }
        </div>
        <CustomButton onClick={() => {
            history.push("/checkout")
            dispatch(toggleCartDropdown())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems})

export default withRouter(connect(mapStateToProps)(CartDropdown))