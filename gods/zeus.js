const generateNumber = require('generateNumber')

const zeusCombinations = {
  background: 0,
  skinTone: 0,
  weaponName: 0,
  weaponColour: 0,
  hairColour: 0,
  hairStyle: 0,
  beardStyle: 0,
  armourName: 0,
  armourColour: 0,
  eyeMarkings: 0
}

const zeusPathToStoreFinal = './final-images/zeus-final'
const zeusPathToImages = './images/ZEUS'
const zeusLayers = 10
const maxCountRareBackgrounds = 4
const rareTraitCount = 20
const rareImagesBackground = 5
const rareBackgroundCount = 20
const normalBackgroundOptions = 6
const normalVariationOptions = 5
// const rareTraitsAllocation = 2

function generateZeusCombinations (zeusCombinations) {
  const combinationCount = 20
  const zeusCombinations = []
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
    const checkComboExists = checkIfZeusCombinationExists(zeusCombinations, thisCombo)
    if (checkComboExists === 'not exists') {
      zeusCombinations.push(thisCombo)
    } else if (checkComboExists === 'exists') {
      console.log('Duplicate found and discarded')
    }
  }
}

function checkIfZeusCombinationExists (zeusCombinations, thisCombo) {
  for (let i = 0; i < zeusCombinations.length; i++) {
    if (zeusCombinations[i] === thisCombo) {
      return 'exists'
    }
  }
  return 'not exists'
}
