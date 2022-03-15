const zeus = require('../gods/zeus')

const combinationCount = 30
const number = 10
const thisCombo = {
  background: zeus.generateNumber(5),
  skinTone: zeus.generateNumber(number),
  weaponName: zeus.generateNumber(number),
  weaponColour: zeus.generateNumber(number),
  hairColour: zeus.generateNumber(number),
  hairStyle: zeus.generateNumber(number),
  beardStyle: zeus.generateNumber(number),
  armourName: zeus.generateNumber(number),
  armourColour: zeus.generateNumber(number),
  eyeMarkings: zeus.generateNumber(number)
}
const combinations = {
  1: {
    background: zeus.generateNumber(5),
    skinTone: zeus.generateNumber(number),
    weaponName: zeus.generateNumber(number),
    weaponColour: zeus.generateNumber(number),
    hairColour: zeus.generateNumber(number),
    hairStyle: zeus.generateNumber(number),
    beardStyle: zeus.generateNumber(number),
    armourName: zeus.generateNumber(number),
    armourColour: zeus.generateNumber(number),
    eyeMarkings: zeus.generateNumber(number)
  },
  2: {
    background: zeus.generateNumber(5),
    skinTone: zeus.generateNumber(number),
    weaponName: zeus.generateNumber(number),
    weaponColour: zeus.generateNumber(number),
    hairColour: zeus.generateNumber(number),
    hairStyle: zeus.generateNumber(number),
    beardStyle: zeus.generateNumber(number),
    armourName: zeus.generateNumber(number),
    armourColour: zeus.generateNumber(number),
    eyeMarkings: zeus.generateNumber(number)
  },
  3: {
    background: zeus.generateNumber(5),
    skinTone: zeus.generateNumber(number),
    weaponName: zeus.generateNumber(number),
    weaponColour: zeus.generateNumber(number),
    hairColour: zeus.generateNumber(number),
    hairStyle: zeus.generateNumber(number),
    beardStyle: zeus.generateNumber(number),
    armourName: zeus.generateNumber(number),
    armourColour: zeus.generateNumber(number),
    eyeMarkings: zeus.generateNumber(number)
  }
}

describe('generateZeusCombinations', () => {
  test('max 30 combinations', () => {
    const actual = zeus.generateZeusCombinations(combinationCount)
    expect(actual).toHaveLength(30)
  })
})

test('generateNumber creates a random number between the selected parameter and 0', () => {
  const actual = zeus.generateNumber(number)
  expect(actual).not.toBe(0)
  expect(actual).toBeLessThan(11)
})

test('checkIfZeusCombinationExists returns "not exists" if existing combination is not present', () => {
  const actual = zeus.checkIfZeusCombinationExists(combinations, thisCombo)
  expect(actual).toBe('not exists')
  expect(combinations).not.toContain(thisCombo)
})
