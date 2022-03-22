// Regular function declaration
function solution(number) {
    return function (num) {
        return number + num;
    }
}
// Arrow function expression
const solution = number => (num => number + num);

// Mix of both 
function solution(number) {
    return (num => number + num);
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
