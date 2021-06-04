import {CartActionTypes} from "./cart.types";
import {addItem, clearCartItem, removeItem} from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_DROPDOWN:
            return {...state, hidden: !state.hidden}
        case CartActionTypes.ADD_ITEM:
            return {...state, cartItems: addItem(state.cartItems, action.payload)}
        case CartActionTypes.REMOVE_ITEM:
            return {...state, cartItems: removeItem(state.cartItems, action.payload)}
        case CartActionTypes.CLEAR_ITEM:
            return {...state, cartItems: clearCartItem(state.cartItems, action.payload)}
        case CartActionTypes.CLEAR_CART:
            return {...state, cartItems: []}
        default:
            return state
    }
}

export default cartReducer