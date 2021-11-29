function sum(a, b) {
    console.log(arguments);
    return a + b;
}


function curry(fn) {
    const args = [].slice.call(arguments, 1);
    return function() {
        args = args.concat([].slice.call(arguments))
        fn.apply(this, args)
    }
}
const currfiedSum = curry(sum, 1);