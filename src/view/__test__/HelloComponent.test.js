// 2. Component Testing
import { render } from '@testing-library/react'
import React from 'react'
import HelloComponent from '../HelloComponent'

const renderComponent = () => render(<HelloComponent />)

// Method 1
// describe('HelloComponent', () => {
//   it('should render the Hello Component', () => {
//     const renderResult = render(<HelloComponent />)
//     const helloComponent = renderResult.getByTestId('HelloComponent')
//     expect(helloComponent).toBeInTheDocument()
//     it('should contain the Hello text', () => {
//       const renderResul = render(<HelloComponent />)
//       const helloComponent = renderResult.getByTestId('HelloComponent')
//       expect(helloComponent).toHaveTextContent('Hello')
//     })
//   })
// })

describe('HelloComponent', () => {
  it('should render the Hello Component', () => {
    const { getByTestId } = renderComponent(<HelloComponent />)
    expect(getByTestId('HelloComponent')).toBeInTheDocument()
  })
  it('should contain the Hello text', () => {
    const { getByTestId } = renderComponent(<HelloComponent />)
    expect(getByTestId('HelloText')).toHaveTextContent('Hello')
  })
})

// Method 3
// describe('HelloComponent', () => {
//   it('should render the Hello Component', () => {
//     const { getByTestId } = renderComponent()
//     expect(getByTestId('HelloComponent')).toBeInTheDocument()
//   })
//   it('should contain the Hello text', () => {
//     const { getByTestId } = renderComponent()
//     expect(getByTestId('HelloText')).toHaveTextContent('Hello')
//   })
// })

// Method 4
// describe('HelloComponent', () => {
//   beforeEach is a lifecycle hook provided by JavaScript testing frameworks such as Jest, Mocha, and Jasmine. It is used to run a specific piece of code before each test in a test suite. This is particularly useful for setting up the conditions needed for your tests, ensuring that each test starts with a clean and consistent state.
//   beforeEach(() => {
//     render(<HelloComponent />)
//   })
//   it('should render the HelloComponent', () => {
//     const helloComponent = screen.getByTestId('HelloComponent')
//     expect(helloComponent).toBeInTheDocument()
//   })
//   it('should display the Hello text', () => {
//     const helloText = screen.getByTestId('HelloText')
//     expect(helloText).toHaveTextContent('Hello')
//   })
// })
