function solve(a) {
    let sum = a;

    function add(b) {
        sum += b;
        return add;
    }

    add.toString = function () { return sum };

    return add;
}

console.log(Number(solve(1)(6)(-3)));
