import React from 'react'

const Button = ({
  dataTestId,
  text = 'Click Me',
  type = 'button',
  disabled = false,
  handleClickButton,
}) => {
  return (
    <button
      data-testid={dataTestId}
      type={type}
      disabled={disabled}
      onClick={handleClickButton}
    >
      {text}
    </button>
  )
}

export default Button
