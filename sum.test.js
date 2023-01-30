const {sum,div} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('divisao positiva', () => {
    expect(div(4, 2)).toBe(2);
});