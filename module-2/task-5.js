'use strict';
/*
Task 5
*/

function checkForSpam(string) {
    for (let i = 0; i < string.split(' ').length; i++) {
      if (string.toLowerCase().split(' ')[i].includes('sale') ||  string.toLowerCase().split(' ')[i].includes('spam')) {
    return true;
      }
    }
    return false
  }

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));