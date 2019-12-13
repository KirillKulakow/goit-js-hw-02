'use strict';
/*
Task 6
*/

let input;
const numbers = [];
let total = 0;

function numbersArr() {
    do {
    input = prompt('Введите число');
    if (Number.isNaN(Number(input))) {
        alert ('Введите число!!!');
    } else {
        numbers.push(Number(input))
    }
    }
    while (input !== null) {
       
    }
    return numbers;
}

function arrSum(arrOfNumbers) {
    let allSum = 0;
    for (let i = 0; i < arrOfNumbers.length; i++) {
        allSum += arrOfNumbers[i];
    }
    alert (`Общая сумма чисел равна ${allSum}`)
}

numbersArr();
arrSum(numbers);