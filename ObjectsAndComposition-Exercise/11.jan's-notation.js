function solve(input) {
  let operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }

  let numbers = [];
  for (const el of input) {
    if (typeof (el) === 'number') {
      numbers.push(el);
    }
    else {
      if (numbers.length < 2) {
        return 'Error: not enough operands!';
      } else {
        let [a, b] = numbers.splice(numbers.length - 2, 2);
        numbers.push(operations[el](a, b));
      }
    }
  }

  if (numbers.length === 1) return numbers[0];
  else return 'Error: too many operands!';
}

console.log(solve(
  [15,
    3,
    '/',
    5,
    '*']
))
