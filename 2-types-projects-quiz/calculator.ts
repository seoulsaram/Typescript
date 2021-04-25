/**
 * Let's make a calculator 🧮
 */

type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(which: Command, num1: number, num2: number): number {
  if (which === 'add') {
    return num1 + num2;
  } else if (which === 'substract') {
    return num1 - num2;
  } else if (which === 'multiply') {
    return num1 * num2;
  } else if (which === 'divide') {
    return num1 / num2;
  } else if (which === 'remainder') {
    return num1 % num2;
  }
}

// console.log(calculate('add', 1, 3)); // 4
// console.log(calculate('substract', 3, 1)); // 2
// console.log(calculate('multiply', 4, 2)); // 8
// console.log(calculate('divide', 4, 2)); // 2
// console.log(calculate('remainder', 5, 2)); // 1

function calculate_ellie(command: Command, a: number, b: number): number {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    case 'remainder':
      return a % b;
    default:
      throw new Error('unknown error');
  }
}

console.log(calculate_ellie('add', 1, 3)); // 4
console.log(calculate_ellie('substract', 3, 1)); // 2
console.log(calculate_ellie('multiply', 4, 2)); // 8
console.log(calculate_ellie('divide', 4, 2)); // 2
console.log(calculate_ellie('remainder', 5, 2)); // 1
