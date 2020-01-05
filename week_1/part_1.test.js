const { sumArray, getRequiredFuel } = require('./part_1');

test('add array [ 1 , 2 ] equals 3', () => {
  expect(sumArray([ 1, 2 ])).toBe(3);
});

test('fuel array [ 6, 10, 15 ] requires [ 0, 1, 3 ]', () => {
  expect(getRequiredFuel([ 6, 10, 15 ])).toEqual([ 0, 1, 3 ]);
});