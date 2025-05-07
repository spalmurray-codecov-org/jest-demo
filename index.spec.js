const { add, subtract, multiply, is_true } = require('./index')

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(subtract(2, 1)).toBe(1)
})

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6)
})

test('is_true', () => {
  expect(is_true(true)).toBeTruthy()
  expect(is_true(false)).not.toBeTruthy()
})
