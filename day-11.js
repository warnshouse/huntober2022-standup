/*
Given a string of words (x), you need to return an array of the words, sorted
alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them
in the order they appeared in the given string.

All inputs will be valid.

last('man i need a taxi up to ubud'),
['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
last('what time are we climbing up the volcano'),
['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
last('take me to semynak'),
['take', 'me', 'semynak', 'to']

Parameters: x - A valid string of words.
Return - An array of words sorted alphabetically by the final character in
         each.
Examples: "man i need a taxi up to ubud" ->
          ["a", "need", "ubud", "i", "taxi", "man", "to", "up"]
          "what time are we climbing up the volcano" ->
          ["time", "are", "we", "the", "climbing", "volcano", "up", "what"]
          "take me to semynak" ->
          ["take", "me", "semynak", "to"]
Pseudocode: Split the string on blank spaces into an array, and sort the array
            by comparing the final character in each word.
*/

function last(x) {
  return x.split(' ').sort((a, b) => {
    return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1);
  });
}
