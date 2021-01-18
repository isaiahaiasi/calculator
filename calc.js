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

// Not sure yet where to validate input...
const buttonObj = {};
const buttons = Object.freeze({
  add: ['+', 'operator', 1, 1],
  subtract: ['-', 'operator', 1, 1],
  multiply: ['x', 'operator', 1, 1],
  divide: ['/', 'operator', 1, 1],
  equals: ['=', 'special', 1, 1],
  clear: ['C', 'special', 1, 1],
  decimal: ['.', 'special', 1, 1],
  backspace: ['<<','special', 1,1],
});

// DOM
const btnCntr = document.querySelector('.btn-group');