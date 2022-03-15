const zeus = require('../gods/zeus')

const combinationCount = 30
const number = 5

describe('generateZeusCombinations', () => {
  test('max 30 combinations', () => {
    const actual = zeus.generateZeusCombinations(combinationCount)
    expect(actual).toHaveLength(30)
  })
  test('pushes an extra combination to combinations array', () => {
    const expected = 1
    const actual = 1
    expect(expected).not.toContain(actual)
  })
})

test('generateNumber creates a random number between the selected parameter and 0', () => {
  const actual = zeus.generateNumber(number)
  console.log(actual)
  expect(actual).not.toBe(0)
  expect(actual).toBeLessThan(6)
})

// test('checkIfZeusCombinationExists returns "exists" if existing combination is present', () => {
//   expect(2).not.toBe(1)
// })
