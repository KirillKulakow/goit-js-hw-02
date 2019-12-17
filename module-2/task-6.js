'use strict';
/*
Task 6
*/

let input;
const numbers = [];
let total = 0;

while (input !== null) {
input = prompt('Введите число');
if (Number.isNaN(Number(input)) || input === '') {
    alert ('Введите число!!!');
} else {
    numbers.push(Number(input));}
}
for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
alert (`Общая сумма чисел равна ${total}`)
