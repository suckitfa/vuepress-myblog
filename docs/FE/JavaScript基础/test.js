var reg = /ab{2,5}c/g
var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbc";
console.log(string.match(reg))