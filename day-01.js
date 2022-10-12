/*
Given a number as an input, print out every integer from 1 to that number.
However, when the integer is divisible by 3, print out "Fizz";
when it’s divisible by 5, print out "Buzz";
when it’s divisible by both 3 and 5, print out "Fizz Buzz".

Parameters: int - a positive integer of the Number type.
Return: Undefined. (Logging output to the console for this challenge.)
Examples: int =  5 ->  1, 2, "Fizz", 4, "Buzz"
          int = 15 ->  1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz",
                      11, "Fizz", 13, 14, "Fizz Buzz"
Pseudocode: for (integer from 1 to int) {
              if (integer divisible by 3 and 5) {
                print "Fizz Buzz"
              } else if (integer divisible by 3) {
                print "Fizz"
              } else if (integer divisible by 5) {
                print "Buzz"
              } else {
                print integer
              }
            }
*/

function fizzBuzz(int) {
  for (let i = 1; i <= int; i++) {
    let output = "";
    
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += (output) ? " Buzz" : "Buzz";
    }

    console.log(output || i);
  }
}
