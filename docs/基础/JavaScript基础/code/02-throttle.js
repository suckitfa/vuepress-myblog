function debounce(fn, time) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;

        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, time);
    }
}

const printHello = (i) => console.log(i, " = ", "hello ");
console.log('befor debounce................');
for (let i = 1; i <= 10; i++) {
    printHello(i);
}

console.log('after debounce...........');
// 1秒内
const debouncedPrintHello = debounce(printHello, 1000);
for (let i = 1; i <= 10; i++) {
    debouncedPrintHello(i);
}




// 节流
function throttle(fn, delay) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                timer = null;
                fn.apply(context, args);
            }, delay);
        }
    }
}