import React, { useState } from 'react'

const GreetingComponent = () => {
  const [Message, setMessage] = useState("Here's a message")

  const ChangeMessage = () => {
    setMessage('Welcome')
  }

  return (
    <div>
      <div>{Message}</div>
      <button onClick={ChangeMessage} data-testid='clickMeBtn'>
        Click Me
      </button>
    </div>
  )
}

export default GreetingComponent
