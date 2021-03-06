const zeusPathToStoreFinal = './final-images/zeus-final'
const zeusPathToImages = './images/ZEUS'
const zeusLayers = 10
const maxCountRareBackgrounds = 4
const rareTraitCount = 20
const rareImagesBackground = 5
const rareBackgroundCount = 20
const normalBackgroundOptions = 6
const normalVariationOptions = 5
const combinationCount = 20
// const rareTraitsAllocation = 2

function generateNumber (number) {
  const chosenNumber = Math.floor(Math.random() * number)
  return chosenNumber + 1
}

function generateZeusCombinations (combinationCount) {
  const combinations = []
  for (let i = 0; i < combinationCount; i++) {
    const thisCombo = {
      background: generateNumber(normalBackgroundOptions),
      skinTone: generateNumber(normalVariationOptions),
      weaponName: generateNumber(normalVariationOptions),
      weaponColour: generateNumber(normalVariationOptions),
      hairColour: generateNumber(normalVariationOptions),
      hairStyle: generateNumber(normalVariationOptions),
      beardStyle: generateNumber(normalVariationOptions),
      armourName: generateNumber(normalVariationOptions),
      armourColour: generateNumber(normalVariationOptions),
      eyeMarkings: generateNumber(normalVariationOptions)
    }
    const checkComboExists = checkIfZeusCombinationExists(combinations, thisCombo)
    if (checkComboExists === 'not exists') {
      combinations.push(thisCombo)
    } else if (checkComboExists === 'exists') {
      console.log('Duplicate found and discarded')
    }
  }
  return combinations
}

function checkIfZeusCombinationExists (combinations, thisCombo) {
  for (let i = 0; i < combinations.length; i++) {
    if (combinations[i] === thisCombo) {
      return 'exists'
    }
  }
  return 'not exists'
}

module.exports = {
  generateZeusCombinations,
  generateNumber,
  checkIfZeusCombinationExists
}
