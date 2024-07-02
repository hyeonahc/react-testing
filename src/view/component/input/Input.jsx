import React from 'react'

const Input = ({
  dataTestId,
  type = 'text',
  name,
  value,
  placeholder = 'Write here...',
  disabled = false,
  handleOnChange,
}) => {
  return (
    <input
      data-testid={dataTestId}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleOnChange}
    />
  )
}

export default Input
