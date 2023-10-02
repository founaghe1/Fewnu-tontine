import React from 'react'

const Input = ({ placeholder, ...restProps }) => {
  return (
    <div>
        <input
            placeholder={placeholder}
            {...restProps}
        />
    </div>
  )
}

export default Input