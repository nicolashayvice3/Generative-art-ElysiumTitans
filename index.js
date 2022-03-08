const fs = require('fs')
const http = require('http')
const sharp = require('sharp')

function processImg () {
    fs.readFile('./images/1.png', 'utf8', (err, data) => {
        if (err) throw err
        console.log/images(data)
/images  /images/images/images/images  }) 
}

function buildImage () {
    sharp('./images/1.png')
   .composite([{ 
    input: './images/2.png',
  }])
  .toFile('final.jpg', console.log('image generated'));
}


//trying to intergrate a for loop in to the buildimage function
// function buildImage2 () {
//     let array = ['./images/2.png','./images/3.png','./images/4.png','./images/5.png','./images/6.png','./images/7.png']
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i]
//         console.log(element)
//         sharp('./images/1.jpg')
//         .composite([{ 
//         input: element,
//         }])
//         .toFile('final.jpg', console.log('image generated'));
//     }
// }

buildImage()
// buildImage2()