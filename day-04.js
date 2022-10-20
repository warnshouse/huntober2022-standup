/*
It's the academic year's end, fateful moment of your school report. The
averages must be calculated. All the students come to you and entreat you to
calculate their average for them. Easy! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.

getAverage([2,2,2,2]),2);
getAverage([1,2,3,4,5,]),3);
getAverage([1,1,1,1,1,1,1,2]),1);

Parameters: scores - An array of positive integer numbers.
Return: An integer representing the average (rounded down) of the input array.
Examples: [2,2,2,2] -> 2
          [1,2,3,4,5] -> 3
          [1,1,1,1,1,1,1,2] -> 1
Pseudocode: Reduce the array to get the sum of its numbers, divide the sum by
            the array's length, and return the rounded down result.
*/

function getAverage(scores) {
  return Math.floor(scores.reduce((acc, cur) => acc + cur, 0) / scores.length);
}
