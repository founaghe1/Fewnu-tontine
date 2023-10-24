import React from 'react';
import './input.css';

const Input = ({ placeholder, value, onChange, ...restProps }) => {
  return (
    <div> 
        <input className='roun'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...restProps}
        />
    </div>
  )
}

export default Input