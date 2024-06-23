# toBeInTheDocument

The toBeInTheDocument matcher is used to assert that an element is present in the DOM. This is particularly useful for checking that a component or element has been successfully rendered.

```js
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // This is important to include the custom matchers
import HelloComponent from './HelloComponent'

test('renders HelloComponent', () => {
  render(<HelloComponent />)
  const helloElement = screen.getByTestId('HelloComponent')
  expect(helloElement).toBeInTheDocument()
})
```

# toHaveTextContent

The toHaveTextContent matcher is used to assert that an element has specific text content. This is useful for verifying that a component or element displays the expected text.

```js
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' // This is important to include the custom matchers
import HelloComponent from './HelloComponent'

test('displays the correct text', () => {
  render(<HelloComponent />)
  const helloText = screen.getByTestId('HelloText')
  expect(helloText).toHaveTextContent('Hello')
})
```

# beforeEach

beforeEach is a lifecycle hook provided by JavaScript testing frameworks such as Jest, Mocha, and Jasmine. It is used to run a specific piece of code before each test in a test suite. This is particularly useful for setting up the conditions needed for your tests, ensuring that each test starts with a clean and consistent state.

```js
import { render, screen } from '@testing-library/react'
import HelloComponent from './HelloComponent'

describe('HelloComponent', () => {
  // Code inside beforeEach will run before each test in this describe block
  beforeEach(() => {
    render(<HelloComponent />)
  })

  it('should render the HelloComponent', () => {
    const helloComponent = screen.getByTestId('HelloComponent')
    expect(helloComponent).toBeInTheDocument()
  })

  it('should display the Hello text', () => {
    const helloText = screen.getByTestId('HelloText')
    expect(helloText).toHaveTextContent('Hello')
  })
})
```

# beforeAll

beforeAll is a lifecycle hook provided by JavaScript testing frameworks such as Jest, Mocha, and Jasmine. It is used to execute a specific piece of code once before all the tests in a test suite run. This is particularly useful for performing one-time setup tasks that are required for all tests in the suite.

```js
import { initializeDatabase, clearDatabase } from './databaseUtils'
import { render, screen } from '@testing-library/react'
import HelloComponent from './HelloComponent'

beforeAll(() => {
  // Code inside beforeAll will run once before all tests in this file
  initializeDatabase()
})

afterAll(() => {
  // Code inside afterAll will run once after all tests in this file
  clearDatabase()
})

describe('HelloComponent', () => {
  it('should render the HelloComponent', () => {
    render(<HelloComponent />)
    const helloComponent = screen.getByTestId('HelloComponent')
    expect(helloComponent).toBeInTheDocument()
  })

  it('should display the Hello text', () => {
    render(<HelloComponent />)
    const helloText = screen.getByTestId('HelloText')
    expect(helloText).toHaveTextContent('Hello')
  })
})
```

# afterAll

afterAll is a lifecycle hook provided by JavaScript testing frameworks like Jest, Mocha, and Jasmine. It is used to execute a specific piece of code once after all the tests in a test suite have run. This is particularly useful for performing one-time cleanup tasks that need to be done after all tests are finished.

```js
import { initializeDatabase, clearDatabase } from './databaseUtils'
import { render, screen } from '@testing-library/react'
import HelloComponent from './HelloComponent'

beforeAll(() => {
  // Code inside beforeAll will run once before all tests in this file
  initializeDatabase()
})

afterAll(() => {
  // Code inside afterAll will run once after all tests in this file
  clearDatabase()
})

describe('HelloComponent', () => {
  it('should render the HelloComponent', () => {
    render(<HelloComponent />)
    const helloComponent = screen.getByTestId('HelloComponent')
    expect(helloComponent).toBeInTheDocument()
  })

  it('should display the Hello text', () => {
    render(<HelloComponent />)
    const helloText = screen.getByTestId('HelloText')
    expect(helloText).toHaveTextContent('Hello')
  })
})
```
