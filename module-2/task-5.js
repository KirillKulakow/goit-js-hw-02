'use strict';
/*
Task 5
*/

function checkForSpam(string) {
      if (string.toLowerCase().includes('sale') ||  string.toLowerCase().includes('spam')) {
    return true
      } return false
  }

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));