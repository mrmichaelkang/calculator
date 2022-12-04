function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate() {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };
  secondNum = +calcDisplay.textContent;

  const result = operations[operator](firstNum, secondNum);
  clear();

  if (result === Infinity || result === -Infinity) {
    calcDisplay.textContent = "ERR";
  } else {
    calcDisplay.textContent = result.toFixed(1);
    firstNum = result;
  }
}

function clear() {
  calcDisplay.textContent = 0;
  firstNum = null;
  secondNum = 0;
  operator = "";
  dotBtn.disabled = false;
  firstNumPressed = false;
  secondNumPressed = false;
}

function numPressed(e) {
  if (!firstNumPressed && firstNum === null) {
    calcDisplay.textContent = "";
    firstNumPressed = !firstNumPressed;
  }

  if (firstNum && !secondNumPressed) {
    calcDisplay.textContent = "";
    secondNumPressed = !secondNumPressed;
  }

  if (typeof e === "number") calcDisplay.textContent += e;
  else calcDisplay.textContent += e.target.textContent;
}

function operPressed(e) {
  dotBtn.disabled = false;
  if (firstNum && operator) {
    operate();
  } else firstNum = +calcDisplay.textContent;

  if (e === "+" || e === "-" || e === "*" || e === "/") operator = e;
  else operator = e.target.textContent;
}

function backspace() {
  const length = calcDisplay.textContent.length;
  if (length === 1) {
    calcDisplay.textContent = "0";
  }

  if (length > 1) {
    if (calcDisplay.textContent.endsWith(".")) dotBtn.disabled = false;
    calcDisplay.textContent = calcDisplay.textContent.slice(0, length - 1);
  }
}

function addDot() {
  calcDisplay.textContent += ".";
  dotBtn.disabled = true;
}

function keyPressed(e) {
  e.preventDefault();
  const key = e.key;
  if (key >= 0 && key <= 9) {
    numPressed(+key);
  }

  if (key === "+" || key === "-" || key === "*" || key === "/") {
    operPressed(key);
  }

  if (key === "Enter") operate();
  if (key === "Backspace") backspace();
  if (!dotBtn.disabled && key === ".") addDot();
}

let calcDisplay = document.querySelector(".calcDisplay");
const numBtns = document.querySelectorAll(".numBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const enterBtn = document.querySelector(".enter");
const clearBtn = document.querySelector(".clear");
const bkspcBtn = document.querySelector(".bkspc");
const dotBtn = document.querySelector(".dot");
let firstNum = null,
  secondNum = null;
let firstNumPressed = false,
  secondNumPressed = false;
let operator = "";

numBtns.forEach((btn) => {
  btn.addEventListener("click", numPressed);
});

operatorBtns.forEach((oper) => {
  oper.addEventListener("click", operPressed);
});

enterBtn.addEventListener("click", operate);
clearBtn.addEventListener("click", clear);
bkspcBtn.addEventListener("click", backspace);
dotBtn.addEventListener("click", addDot);
window.addEventListener("keydown", keyPressed);
