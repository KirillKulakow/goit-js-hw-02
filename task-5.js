'use strict';
/*
Task 5
*/

function checkForSpam(string) {
    let strLower = string.toLowerCase();
    let stringArray = strLower.split('');
    let result = false;
    for (let i = 0; i < stringArray.length; i++){
        if (stringArray[i] === 's' && stringArray[i+1] === 'p' && stringArray[i+2] === 'a' && stringArray[i+3] === 'm' || 
        stringArray[i] === 's' && stringArray[i+1] === 'a' && stringArray[i+2] === 'l' && stringArray[i+3] === 'e') {
            result = true;
        }
    }
    return result;
}

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));