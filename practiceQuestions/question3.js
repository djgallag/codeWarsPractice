/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
    let newStr = str.toLowerCase().split('');
    let n = false
    let amountX = 0;
    let amountO = 0;  
    
    for (let i = 0; i < str.length; i++) {
      if (newStr[i] === 'x') {
        amountX++;
      }
    }
    for (let j = 0; j < str.length; j++) {
      if (newStr[j] === 'o') {
        amountO++;
      }
    }
    if (amountX === amountO) { 
      n = true
    }
    return n;  
  }
  