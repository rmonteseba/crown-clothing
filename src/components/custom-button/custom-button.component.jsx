import React from "react";

import './custom-button.style.scss'

const CustomButton = ({children, className, ...otherProps}) => (
    <button className={`custom-button ${className}`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton