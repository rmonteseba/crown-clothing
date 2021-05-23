import {CartDropdownActionTypes} from "./cart-dropdown.types";
import {addItem, clearCartItem, removeItem} from "./cart-dropdown.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartDropdownReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartDropdownActionTypes.TOGGLE_DROPDOWN:
            return {...state, hidden: !state.hidden}
        case CartDropdownActionTypes.ADD_ITEM:
            return {...state, cartItems: addItem(state.cartItems, action.payload)}
        case CartDropdownActionTypes.REMOVE_ITEM:
            return {...state, cartItems: removeItem(state.cartItems, action.payload)}
        case CartDropdownActionTypes.CLEAR_ITEM:
            return {...state, cartItems: clearCartItem(state.cartItems, action.payload)}
        default:
            return state
    }
}

export default cartDropdownReducer