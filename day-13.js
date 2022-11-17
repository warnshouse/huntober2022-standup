/*
Implement a difference function, which subtracts one list from another and
returns the result.
It should remove all values from list a, which are present in list b keeping
their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the
other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

Parameters: arrA - An array of values;
            arrB - Another array of values.
Return: An array containing all of the values from arrA which were not present
        in arrB.
Examples: arrayDiff([1,2,2,2,3], [2]) -> [1,3]
          arrayDiff([], [4,5]) -> []
          arrayDiff([3,4], [3]) -> [4]
          arrayDiff([1,8,2], []) -> [1,8,2]
Pseudocode: Filter arrA for all values which are not present in arrB and
            the resulting array.
*/

function arrayDiff(arrA, arrB) {
  // return arrA.filter(ele => !arrB.includes(ele));
  const setB = new Set(arrB);
  return arrA.filter(ele => !setB.has(ele));
}
