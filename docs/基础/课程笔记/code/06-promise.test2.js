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
    return 1;
}, e => { console.log(e, '***********') }).then(data => {
    console.log(data);
});