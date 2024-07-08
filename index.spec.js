const { add, subtract, multiply } = require('./index')

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test('subtract', () => {
  expect(subtract(2, 1)).toBe(1)
})

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6)
})