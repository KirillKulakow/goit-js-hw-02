'use strict';
/*
Task 6
*/

let input;
const numbers = [];
let total = 0;

    while (input !== null) {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input))) {
        alert ('Введите число!!!');
    } else {
        total = total + Number(input);
        numbers.push(Number(input));}
    }
    alert (`Общая сумма чисел равна ${total}`)