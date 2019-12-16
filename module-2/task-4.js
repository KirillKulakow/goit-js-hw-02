'use strict';
/*
Task 4
*/

function formatString(string) {
    if (string.split('').length >= 40) {let strArr = string.split(''); strArr.splice(39, 39, ' ...');
    return strArr.join('');} else {return string}
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );

