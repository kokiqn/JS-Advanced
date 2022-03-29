function getFibonator() {
    let [x, y] = [0, 1];
    return function () {
        let z = x + y;
        x = y;
        y = z;
        return x;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
