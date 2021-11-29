const fs = require('fs');
// 发布订阅：先订阅后发布
function EventEmitter() {
    this._arr = [];
}

EventEmitter.prototype.on = function(cb) {
    this._arr.push(cb);
}

EventEmitter.prototype.emit = function() {
    this._arr.forEach(fn => fn.apply(this, arguments));
}
let e = new EventEmitter();
let school = {};
e.on(function() {
    console.log('一个接口成功了');
})
e.on(function(data, key) {
    school[key] = data;
    if (Object.keys(school).length === 2) {
        console.log(school);
    }
});

//
fs.readFile(__dirname + '/name.txt', 'utf-8', function(err, val) {
    if (err) console.log(err);
    e.emit(val, 'name');
});

fs.readFile(__dirname + '/age.txt', 'utf-8', function(err, val) {
    if (err) console.log(err)
    e.emit(val, 'age');
});