import React from "react";

import './cart-item.styles.scss'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <div className="cart-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem