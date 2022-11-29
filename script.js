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

function operate(operator, x, y) {
  const operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
  };

  const result = operations[operator](x, y);
  return result;
}
