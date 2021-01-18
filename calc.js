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
  multiply: ['*', 'operator', 1, 1],
  divide: ['/', 'operator', 1, 1],
  equals: ['=', 'special', 1, 1],
  clear: ['C', 'special', 1, 1],
  decimal: ['.', 'special', 1, 1],
  backspace: ['<<','special', 1,1],
});

// DOM
const calcScreen = document.querySelector('#num-input');
const btnCntr = document.querySelector('.btn-group');
const buttonElms = btnCntr.querySelectorAll('button');

buttonElms.forEach(btn => {
  const btnClasses = btn.className;
  if (btnClasses.includes('num-btn')) {
    btn.addEventListener('click', () => {
      sendDigit(btn.getAttribute('data-num'));
    })
    console.log(`${btn} is num`);
  } else if (btnClasses.includes('op-btn')) {
    console.log(`${btn} is op`);
  } else if (btnClasses.includes('spc-btn')) {
    console.log(`${btn} is spc`);
  } else {
    console.warn("invalid btn found");
  }
});

// Sent from a number button to the calculator "screen"
function sendDigit(n) {
  calcScreen.textContent += n;
}