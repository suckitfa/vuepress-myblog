const add = num => num + 10;
const mutiply = num => num * 2;

function compose(...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((acc, cur) => (...args) => acc(b(...args)));
}