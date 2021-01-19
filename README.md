# Calculator
Final **Foundations** project for The Odin Project.
The idea is to make a very simple calculator. No PEMDAS.
No eval() or new Function() (wtf, I had no idea "new Function" was a thing, that's wild...)

## TO-DO LIST
- ✔️ Create functions for all the basic math operators found on simple calculators:
  - ✔️ add
  - ✔️ subtract
  - ✔️ multiply
  - ✔️ divide
- ✔️ Create a function `operate` that takes an operator and 2 numbers, then calls one of the above functions on the numbers.
- ✔️ Create a basic HTML calculator w buttons for digits, operators, equals, clear
- ✔️ Create functions to display in the calculator what numbers are clicked
- ✔️ Finish the owl

Notes:
- ✔️ Users should be able to string together several operations, with each pair evaluated at the same time. If user inputs "num op num op num," it should always evaluate as "(num op num) op num".
- ✔️ Round numbers so they don't overflow the screen.
- ✔️ Handle the case where the user tries to evaluate an invalid expression ("","num","num op")
  - **Valid**: `num op num`
  - **Invalid**: `(blank)`, `num`, `num op`
- ✔️ "Clear" should wipe out any existing data.
- ✔️ You can't divide by zero, so gracefully handle attempts to do so (display snarky error)

EC:
- ✔️ Let the user input decimals (but you can't have > 1 decimal per number!)
- 🤷 Make it not hideous
- ✔️ Add a backspace button, so the user can undo if they click the wrong number
- ❌ Add keyboard support! (Are you kidding me? I'm moving on to back-end, baby! 😎)
