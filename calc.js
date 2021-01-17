// BASIC OPERATIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// Don't really have to freeze, but I wanted something more like an enum
const ops = Object.freeze({
  add,
  subtract,
  multiply,
  divide,
});

function operate(op, a, b) {
  return ops[op](a, b);
}