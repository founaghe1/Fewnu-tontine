import React from 'react';
import './input.css';

const Input = ({ placeholder, ...restProps }) => {
  return (
    <div> 
        <input className='roun'
            placeholder={placeholder}
            {...restProps}
        />
    </div>
  )
}

export default Input