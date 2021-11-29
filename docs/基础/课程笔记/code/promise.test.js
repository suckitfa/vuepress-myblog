// const Promise = require('./promise');
const fs = require('fs');

function read(fileName) {
    return new Promise((resolve, reject) => {
        const filePath = __dirname + '/' + fileName;
        fs.readFile(filePath, 'utf-8', function(err, val) {
            if (err) reject(err)
            resolve(val);
        });
    });
}


Promise.all([1, 2, 3, read('name.txt'), read('age.txt')]).then(data => {
    console.log(data);
})