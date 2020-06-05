/*
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
    let longest = '';
    let current = '';

    if (strarr.length === 0 || k > strarr.length || k <= 0) {
      return longest;
    }

    for (let i = 0; i <= strarr.length - k; i++) {
      current = strarr[i];

      for (let j = 1; j < k; j++) {
        current = current + strarr[i+j];
      }

      if (longest.length < current.length) {
        longest = current;
      }
    }

    return longest;
}
