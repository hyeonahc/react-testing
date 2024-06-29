import React from 'react'

const WorldComponent = ({ title, desc }) => {
  return (
    <div data-testid='world-component'>
      <div data-testid='title'>{title}</div>
      <div data-testid='desc'>{desc}</div>
    </div>
  )
}

export default WorldComponent
