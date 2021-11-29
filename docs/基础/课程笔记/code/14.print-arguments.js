function printArguments() {
    console.log(arguments);
}
// printArguments('1', 2, 3, 4, 5)

var data = [];
for (var i = 0; i < 3; i++) {
    (data[i] = function() {
        console.log(arguments.callee.i);
    }).i = i;
}