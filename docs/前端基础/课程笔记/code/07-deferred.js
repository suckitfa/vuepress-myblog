const Promise = require('./06-promise')
const fs = require('fs')

function read(url) {
    let defer = Promise.deferred(); // {promise resolve, reject }
    fs.readFile(url, 'utf-8', function(err, val) {

    });

    return defer.promise;
}