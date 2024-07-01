import { fireEvent, render } from '@testing-library/react'
import Button from '../Button'

const renderComponent = props => render(<Button {...props} />)

describe('Button Component', () => {
  let props
  const mockHandleClickButton = jest.fn()

  beforeEach(() => {
    props = {
      dataTestId: 'buttonComponent',
      text: 'Click Me',
      type: 'button',
      disabled: false,
      handleClickButton: mockHandleClickButton,
    }
  })

  it('should render the Button Component', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('buttonComponent')).toBeInTheDocument()
  })

  it('should display the correct text', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('buttonComponent')).toHaveTextContent(props.text)
  })

  it('should have the correct type attribute', () => {
    const { getByTestId } = renderComponent(props)
    expect(getByTestId('buttonComponent')).toHaveAttribute('type', 'button')
  })

  it('should call handleClickButton when clicked', () => {
    const { getByTestId } = renderComponent(props)
    const testButton = getByTestId('buttonComponent')
    fireEvent.click(testButton)
    expect(mockHandleClickButton).toHaveBeenCalledTimes(1)
  })
})
