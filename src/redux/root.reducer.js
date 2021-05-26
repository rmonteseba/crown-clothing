import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

import userReducer from "./user/user.reducer";
import cartDropdownReducer from "./cart-dropdown/cart-dropdown.reducer";
import {directoryReducer} from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartDropdown']
}

const rootReducer = combineReducers({
    user: userReducer,
    cartDropdown: cartDropdownReducer,
    directory: directoryReducer,
    shop: shopReducer
})


export default persistReducer(persistConfig, rootReducer)