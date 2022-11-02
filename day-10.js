/*
Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to
lower case. Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:
"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.

Parameters: str - A string of characters containing only English alphabet
            characters and spaces.
Return: A string with every character's case changed and the order of words
        reversed from the input.
Examples: "Example Input" -> "iNPUT eXAMPLE"
          "Leon A Noel"   -> "nOEL a lEON"
Pseudocode: Split the string into an array on each character, map each
            character into its opposite case, join the array into a string,
            split that string on blank spaces, reverse the array, join the
            array and return it.
*/

function reverseCaseAndOrder(str) {
  return str.split('').map(char => {
    return (char === char.toUpperCase())
      ? char.toLowerCase()
      : char.toUpperCase();
  }).join('').split(' ').reverse().join(' ');
}
