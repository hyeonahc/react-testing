import { render } from '@testing-library/react'
import React from 'react'
import WorldComponent from '../WorldComponent'

// Helper function to render the component
const renderComponent = props => render(<WorldComponent {...props} />)
// Below code is the same as above
// const renderComponent = ({ title, desc }) => render(<WorldComponent title={title} desc={desc} />)

// Test suite for WorldComponent
describe('render World Component', () => {
  let props

  // Set up default props before each test
  beforeEach(() => {
    props = {
      title: 'title?',
      desc: 'desc',
    }
  })

  // Test if the component renders
  it('should render World Component', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('worldComponent')).toBeInTheDocument()
  })

  // Test if the title and description are displayed correctly
  it('should display the correct title and description', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('title')).toHaveTextContent(props.title)
    expect(getByTestId('desc')).toHaveTextContent(props.desc)
  })
})
