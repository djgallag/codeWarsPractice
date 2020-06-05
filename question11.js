/*
The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

For C#: Use a Dictionary<char, int> for this kata!
*/

function count (string) {  
    let ret = {};
    let arr = string.split('');
    for (i = 0; i < string.length; i++) {
      if (!ret[arr[i]]) {
        ret[arr[i]] = 1;
      }
      else {
        ret[arr[i]]++;
      }
    }
    return ret;
  }