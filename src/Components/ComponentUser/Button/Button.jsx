import React from 'react';
import './button.css';

const Button = ({ libelet, className }) => {
    
  
    return (
      <button className={className}> 
        {libelet}
      </button>
    );
  }

export default Button