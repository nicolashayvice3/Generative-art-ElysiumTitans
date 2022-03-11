const zeus = require('../gods/zeus')

const combinationCount = 20

describe('generateZeusCombinations', () => {
  test('max 20 combinations', () => {
    const actual = zeus.generateZeusCombinations(combinationCount)
    expect(actual).toHaveLength(20)
  })
})
