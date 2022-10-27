/*
Given an array of integers, Find the Nth smallest element in this array of
integers.

Notes
Array/list size is at least 3.

Array/list's numbers could be a mixture of positives, negatives and zeros.

Repetition in array/list's numbers could occur, so don't Remove Duplications.

nthSmallest({3,1,2} ,2) ==> return (2)
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

Parameters: arr - An array of at least 3 integers;
            n - The nth smallest element to find in the input array.
Return: An integer representing the nth smallest element of arr.
Examples: nthSmallest([3, 1, 2], 2) -> 2
          nthSmallest([15, 20, 7, 10, 4, 3], 3) -> 7
          nthSmallest([15, 20, 7, 10, 4, 3], 3) -> 7
          nthSmallest([177, 225, 243, -169, -12, -5, 2, 92], 5) -> 92
Pseudocode: Sort the array in ascending order and then return the element at
            index n - 1.
*/

function nthSmallest(arr, n) {
  return arr.sort((a, b) => a - b)[n - 1];
}
