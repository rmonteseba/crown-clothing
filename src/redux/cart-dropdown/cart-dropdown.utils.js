export const addItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find((cartItem) => (cartItem.id === cartItemToAdd.id))
    if (existingCartItem) {
        return cartItems.map((cartItem => cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem))
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => (cartItem.id === cartItemToRemove.id))
    if (existingCartItem.quantity === 1) {
        return clearCartItem(cartItems, cartItemToRemove)
    } else {
        return cartItems.map((cartItem => cartItem.id === cartItemToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem))
    }
}

export const clearCartItem = (cartItems, cartItemToClear) => (cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id))