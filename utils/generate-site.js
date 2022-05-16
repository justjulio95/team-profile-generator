const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and throw it to the catch() method
            if (err){
                reject(err);
                //return to ensure the promise doesn't accidentally resolve afterwards
                return;
            }
            // if everything went well, resolve the promise and send a message to the then() method
            resolve({
                ok:true,
                message:'File created successfully!'
            })
        })
    })
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err){
                reject(err);
                return
            }
            resolve({
                ok:true,
                message:'File copied successfully!'
            })
        })
    })
}

module.exports = {writeFile, copyFile}