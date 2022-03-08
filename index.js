const fs = require('fs')
const http = require('http')
const sharp = require('sharp')

function processImg () {
    fs.readFile('./images/1.png', 'utf8', (err, data) => {
        if (err) throw err
        console.log/images(data)
/images  /images/images/images/images  }) 
}

function buildImage2 () {
    let array = ['./images/1.png', './images/2.png', './images/3.png','./images/4.png','./images/5.png','./images/6.png','./images/7.png']
    sharp(array[0])
    .composite([{ 
    input: array[1],
    }])
    .toFile('final2.jpg', console.log('image generated'))

    const timer = ms => new Promise(res => setTimeout(res, ms))

    async function load () {
        for (let i = 2; i < array.length; i++) {
            await timer(400)
            const element = array[i]
            console.log(element)
            let fileName = `final${i}.jpg`
            let finalFileName = `final${i + 1}.jpg`
            console.log("filename", fileName, "finalFileName", finalFileName )
            sharp(fileName)
            .composite([{ 
            input: element,
            }])
            .toFile(finalFileName, console.log('image generated'))
        }

    }
    load()

    setInterval(function(){
        const path = "./final2.jpg";
        try {
            fs.unlinkSync(path);
            console.log("File removed:", path);
        } catch (err) {
        console.error(err);
        }
    },5000);
}

buildImage2()



