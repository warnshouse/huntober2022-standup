/*
Given an array of integers as strings and numbers,
return the sum of the array values as if all were numbers.
Return your answer as a number.

assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

Parameters: arr - an array of integers as strings and numbers.
Return: A number representing the sum of all the array values.
Examples: [9, 3, '7', '3'] -> 22
          ['5', '0', 9, 3, 2, 1, '9', 6, 7] -> 42
          ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'] -> 41
Pseudocode: Reduce the array by converting every value to a number before
            summing.
*/

function sumMix(arr) {
  return arr.reduce((acc, cur) => acc + Number(cur), 0);
}
