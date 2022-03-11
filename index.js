const fs = require('fs')
// const http = require('http')
const sharp = require('sharp')

function buildImage2 () {
  const array = ['./images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png', './images/6.png', './images/7.png']
  sharp(array[0])
    .composite([{
      input: array[1]
    }])
    .toFile('final2.jpg', console.log('image generated'))

  const timer = ms => new Promise(res => setTimeout(res, ms))

  async function load () {
    for (let i = 2; i < array.length; i++) {
      await timer(400)
      const element = array[i]
      console.log(element)
      const fileName = `final${i}.jpg`
      const finalFileName = `final${i + 1}.jpg`
      console.log('filename', fileName, 'finalFileName', finalFileName)
      sharp(fileName)
        .composite([{
          input: element
        }])
        .toFile(finalFileName, console.log('image generated'))
    }
  }
  load()

  setTimeout(function () {
    for (let i = 2; i < 7; i++) {
      console.log(i)
      const path = `./final${i}.jpg`
      try {
        fs.unlinkSync(path)
        console.log('File removed:', path)
      } catch (err) {
        console.error(err)
      }
    }
  }, 5000)
}

// function generateNumber (number) {
//   const chosenNumber = Math.floor(Math.random() * number)
//   return chosenNumber + 1
// }

buildImage2()

// module.exports = {
//   generateNumber
// }
