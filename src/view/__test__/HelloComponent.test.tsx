// 2. Component Testing
import { render } from '@testing-library/react'
import HelloComponent from '../HelloComponent'

const renderComponent = () => render(<HelloComponent />)

describe('HelloComponent', () => {
  it('should render the Hello Component', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('HelloComponent')).toBeInTheDocument()
  })
  it('should contain the Hello text', () => {
    const { getByTestId } = renderComponent()
    expect(getByTestId('HelloText')).toHaveTextContent('Hello')
  })
})
