function getType(val) {
    return Object.prototype.toString.call(val)
        .split(' ')
        .pop().slice(0, -1).toLowerCase();
}

const res = getType(1)
console.log(res)