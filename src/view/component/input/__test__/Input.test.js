// OnChange Event Test
// This test ensures that the handleOnChange function of the Input component is called correctly each time the input value changes.
import { fireEvent, render } from '@testing-library/react'
import Input from '../Input'

const renderComponent = props => render(<Input {...props} />)

describe('Input Component', () => {
  let props
  const mockHandleOnChangeInput = jest.fn()

  beforeEach(() => {
    props = {
      dataTestId: 'inputComponent',
      placeholder: 'Type here...',
      type: 'text',
      disabled: false,
      name: 'inputName',
      value: 'inputValue',
      handleOnChange: mockHandleOnChangeInput,
    }
  })

  const changeInputValue = (input, value) => {
    fireEvent.change(input, {
      target: { value },
    })
  }

  it('renders correctly with given props', () => {
    const { getByTestId } = renderComponent(props)
    const testInput = getByTestId('inputComponent')

    expect(testInput).toHaveAttribute('placeholder', 'Type here...')
    expect(testInput).toHaveAttribute('name', 'inputName')
    expect(testInput).toHaveAttribute('value', 'inputValue')
    expect(testInput).not.toBeDisabled()
  })

  it('calls handleOnChange when input value changes', () => {
    const { getByTestId } = renderComponent(props)
    const testInput = getByTestId('inputComponent')

    changeInputValue(testInput, 'abc')
    expect(mockHandleOnChangeInput).toHaveBeenCalledTimes(1)

    changeInputValue(testInput, 'efg')
    expect(mockHandleOnChangeInput).toHaveBeenCalledTimes(2)
  })
})
