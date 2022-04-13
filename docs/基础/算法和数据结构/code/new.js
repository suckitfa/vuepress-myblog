function test() {
    const Fn = function() {};
    const o = _new(Fn);
    const result = o.__proto__ === Fn.prototype;
    return result;
}

const _new = function(fn) {
    const newobj = {}
    newobj.__proto__ = fn.prototype

    const args = [].slice.call(arguments, 1);

    const resultOfFunc = fn.apply(newobj, args)
    return resultOfFunc instanceof Object ? resultOfFunc : newobj;
}

test();