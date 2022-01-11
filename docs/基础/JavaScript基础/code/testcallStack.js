const mutiply = (a, b) => a * b;
const square = n => mutiply(n, n);
const printSquare = (n) => {
    const squared = square(n);
    console.log(squared);
}
printSquare(4)