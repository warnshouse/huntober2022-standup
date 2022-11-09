/*
An ordered sequence of numbers from 1 to N is given. One number might have
deleted from it, then the remaining numbers were mixed. Find the number that
was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your
function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

Parameters: orderedArr - An array containing an ordered sequence of numbers
            from 1 to N, or empty if N is 1 or less.
            mixedArr - An array containing the mixed values from orderedArr
            with one number possibly having been deleted from it.
Return: An integer representing the number missing from mixedArr, or 0.
Examples: ([1,2,3,4,5], [3,4,1,5]) -> 2
          ([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]) -> 5
          ([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]) -> 0
Pseudocode: Reduce both arrays to the sum of their values, and then subtract
            mixedArr's sum from orderedArr's sum and return the difference.
*/

function findDeletedNumber(orderedArr, mixedArr) {
  return orderedArr.reduce((acc, cur) => acc + cur, 0)
         - mixedArr.reduce((acc, cur) => acc + cur, 0);
}
