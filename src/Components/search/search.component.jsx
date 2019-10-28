import React from 'react';
import './search.styles.scss';

const SeachBox = ({ handleChange, placeholder }) => (
    <input className='search' type='search' onChange={handleChange} placeholder={placeholder} />
)

export default SeachBox;