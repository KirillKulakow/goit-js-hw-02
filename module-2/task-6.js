// 'use strict';
// /*
// Task 6
// */

let input;
const numbers = [];
let total = 0;
do {
  input = prompt('Введите число!');
  if (Number.isNaN(Number(input)) || input === '') {
    alert('Введите число!');
  } else if (input != null) {
    numbers.push(Number(input));
  }
} while (input != null);
if (numbers.length) {
  for (let number of numbers) {
    total += number;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}

