function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function is_true(a) {
  if (a) {
    return true
  }
  return false
}

module.exports = { add, subtract, multiply, divide, is_true }
