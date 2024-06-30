// Event Testing
import { fireEvent, render } from '@testing-library/react'
import GreetingComponent from '../GreetingComponent'

const renderComponent = () => render(<GreetingComponent />)

describe('render GreetingComponent', () => {
  it('display the new message after button click', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('clickMeBtn')).toHaveTextContent("Here's a message")
    fireEvent.click(getByTestId('clickMeBtn'))
    expect(getByTestId('clickMeBtn')).toHaveTextContent('Welcome')
  })

  // it('should display the initial message', () => {
  //   // Check the initial state explicitly
  //   expect(screen.getByTestId('clickMeBtn')).toHaveTextContent("Here's a message")
  // })

  // it('should change the message when the button is clicked', () => {
  //   // Simulate click event
  //   fireEvent.click(screen.getByTestId('clickMeBtn'))
  //   // Verify the message changes
  //   expect(screen.getByTestId('clickMeBtn')).toHaveTextContent('Welcome')
  // })
})
