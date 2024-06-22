// 1. Unit Testing
// This file contains a unit test for the getLargestNumber function using the Jest testing framework.
import { getLargestNumber } from '../getLargestNumber'

// describe: group related tests
describe('get largest number', () => {
  // it: defines a single test case
  it('should return largest number', () => {
    const numberList = [6, 2, 9, 0]
    // expect: this is the *assertion for the test
    // *An assertion is a statement in programming, particularly in testing, that verifies that a particular condition is true.
    expect(getLargestNumber(numberList)).toBe(9)
  })
})
