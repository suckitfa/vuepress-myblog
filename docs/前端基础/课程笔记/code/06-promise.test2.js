const Promise = require('./06-promise');

let p = new Promise((resolve, reject) => {
    resolve(123);
})

let promise2 = p.then(data => {
    return data;
}, err => {
    return err + 400;
})

promise2.then(d => {
    console.log(d + '---------')
}, e => { console.log(e, '***********') });