'use strict';
/*
Task 4
*/

function formatString(string) {
    let stringArray = string.split('');
    let result = '';
    let resultArr = [];
    if (stringArray.length >= 40) {
        resultArr = stringArray.slice(0, 39);
        resultArr.push(' ...');
        result = resultArr.join('');
    } else {
        resultArr = stringArray;
        result = resultArr.join('');
    }
    return result;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );