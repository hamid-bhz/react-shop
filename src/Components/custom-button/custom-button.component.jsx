import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, googleSignIN, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${googleSignIN ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;