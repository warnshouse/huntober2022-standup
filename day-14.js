/*
You need to create a function that when provided with a triplet, returns the
index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers.

For example:
gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input
array is 0.

Another example (just to make sure it is clear):
gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input
array is 1.

Parameters: arr - An array containing three distinct numbers.
Return: The index of the numerical element that lies between the other two
        elements.
Examples: gimme([2, 3, 1]) -> 0
          gimme([5, 10, 14]) -> 1
Pseudocode: Use sort on the spread array to find the middle value, then use
            indexOf on the array to find the index of that value and return it.
*/

function gimme(arr) {
  return arr.indexOf([...arr].sort((a, b) => a - b)[1]);
}
