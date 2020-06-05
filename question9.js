/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
    string = string.toLowerCase().replace(/[^a-z]/ig, '');
    const newArr = []
    const newObj = {}
    if (string.length < 26) {
      return false
    }
    for (let i = 0; i < string.length; i++) {
      if (!newObj[string[i]]) {
        newObj[string[i]] = 1;
        newArr.push(string[i]);
      }
    }
    return newArr.length === 26
  }
  