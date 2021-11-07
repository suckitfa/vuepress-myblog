const Promise = require('./06-promise')
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failing')
    }, 1000);
})

p.then(v => console.log(v), e => console.log(e))
p.then(v => console.log(v), e => console.log(e))
p.then(v => console.log(v), e => console.log(e))
p.then(v => console.log(v), e => console.log(e))