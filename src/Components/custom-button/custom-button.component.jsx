import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, googleSignIN, ...otherProps }) => (
    <button className={`${googleSignIN ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;