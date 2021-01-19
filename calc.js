const MAX_NUM_LEN = 10;

//#region OPERATION HANDLING
// BASIC OPERATIONS
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
// Idk if this counts as "snarky," per project guidelines, but I'm lazy lol
const divide = (a, b) => b != 0 ? a / b : 2318008;

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

const opSymbols = Object.freeze({
  'add':'+',
  'subtract':'-',
  'multiply':'*',
  'divide': '/',
});


let argA = '';
let argB = '';
let loggedOp = 'add';


// OTHER OPERATIONS
function clear() {
  argA = '';
  argB = '';
  loggedOp = 'add';
  [calcScreen.textContent, calcTopScreen.textContent] = '';
}

function equals() {
  let val = evaluate();

  loggedOp = 'add';
  argA = '';
  calcTopScreen.textContent = '';
  argB = val;
  calcScreen.textContent = argB;
}

function decimal() {
  if (!argB.includes('.')) {
    sendDigit('.');
  } else {
    console.log('argB already contains a decimal!');
  }
}

function backspace() {
  argB = argB.slice(0,argB.length - 1);
  calcScreen.textContent = argB;
}

const spcOps = Object.freeze({
  equals,
  clear,
  decimal,
  backspace,
});

//#endregion

//#region DOM MANIPULATION

const calcScreen = document.querySelector('#num-input');
const calcTopScreen = document.querySelector('#num-record');
const btnCntr = document.querySelector('.btn-group');
const buttonElms = btnCntr.querySelectorAll('button');

buttonElms.forEach(btn => {
  const btnClasses = btn.className;
  if (btnClasses.includes('num-btn')) {
    btn.addEventListener('click', () => {
      sendDigit(btn.getAttribute('data-num'));
    });

  } else if (btnClasses.includes('op-btn')) {
    const btnOp = btn.getAttribute('data-op');

    if (btnOp in ops) {
      btn.addEventListener('click', () => {
        performOp(btnOp);
      });
    } else if (btnOp in spcOps) {
      btn.addEventListener('click', () => {
        spcOps[btnOp]();
      });
    }
    
  } else {
    console.warn("invalid btn found");
  }
});

//#endregion

// Sent from a number button to the calculator "screen"
function sendDigit(n) {
  if (calcScreen.textContent.length < MAX_NUM_LEN) {
    calcScreen.textContent += n;
    argB += n;
  }
}

// Called when an op button is pressed
function performOp(op) {
  let val = evaluate();
  
  loggedOp = op;
  argA = val;
  calcTopScreen.textContent = argA + " " + opSymbols[op];
  calcScreen.textContent = "";
  argB = "";
}

// TODO: Add rounding, real validation, probably other stuff...
function evaluate() {
  let val = operate(loggedOp, +argA, +argB); 

  console.log(`${argA} ${opSymbols[loggedOp]} ${argB} = ${val}`);

  // TODO: round val before putting it out to the screen

  return val;
}