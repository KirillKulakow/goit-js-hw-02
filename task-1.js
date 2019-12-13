'use strict';
/*
Task 1
*/

function logItems(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        let result = `${i+1} - ${array[i]}`;
        console.log(result);
    }
}

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);