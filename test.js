function mynew(con) {
    if(typeof con !== 'function') {
        throw TypeError(`${con} is not a constructor`)
    }
    const obj = {}
    obj.__proto__ = con.prototype
    const  res = con.call(obj)
    if(res !== 'null' && typeof res !== 'object') {
        return obj
    } else {
        return res;
    }
}

function Dog() {
}

console.log(mynew(Dog))
console.log(mynew(1))