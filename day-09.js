/*
The goal of this exercise is to convert a string to a new string where each
character in the new string is "(" if that character appears only once in the
original string, or ")" if that character appears more than once in the
original string. Ignore capitalization when determining if a character is a
duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

Parameters: str - A string of characters.
Return: A string where each character is "(" if that character appears only
        once in the original string, or ")" if that character appears more
        than once.
Examples: "din"      ->  "((("
          "recede"   ->  "()()()"
          "Success"  ->  ")())())"
          "(( @"     ->  "))(("
Pseudocode: Convert str to lowercase, split into an array, then map the array
            to convert each element to the appropriate character.
*/

// function convertStr(str) {
//   return str.toLowerCase().split('').map(char => {
//     return (str.indexOf(char) === str.lastIndexOf(char)) ? '(' : ')';
//   }).join('');
// }

function convertStr(str) {
  str = str.toLowerCase();
  const counter = {};
  let conversion = '';

  for (let i = 0; i < str.length; i++) {
    counter[str[i]] = (str[i] in counter) ? counter[str[i]] + 1 : 1;
  }

  for (let j = 0; j < str.length; j++) {
    conversion += (counter[str[j]] > 1) ? ')' : '(';
  }

  return conversion;
}
