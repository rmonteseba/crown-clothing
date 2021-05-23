import {CartDropdownActionTypes} from "./cart-dropdown.types";

export const toggleCartDropdown = () => ({type: CartDropdownActionTypes.TOGGLE_DROPDOWN})
export const addItem = (item) => ({type: CartDropdownActionTypes.ADD_ITEM, payload: item})
export const removeItem = (item) => ({type: CartDropdownActionTypes.REMOVE_ITEM, payload: item})
export const clearItem = (item) => ({type: CartDropdownActionTypes.CLEAR_ITEM, payload: item})