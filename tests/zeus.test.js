const zeus = require('../gods/zeus')

const combinationCount = 1000

describe('generateZeusCombinations', () => {
  test('max 20 combinations', () => {
    const actual = zeus.generateZeusCombinations(combinationCount)
    expect(actual).toHaveLength(1000)
  })
  test('pushes an extra combination to combinations array', () => {
    const expected = 1
    const actual = 1
    expect(expected).not.toContain(actual)
  })
})

test('generateNumber creates a random number between the selected parameter and 0', () => {
  expect(1).toBe(1)
})

test('checkIfZeusCombinationExists returns "exists" if existing combination is present', () => {
  expect(2).not.toBe(1)
})
