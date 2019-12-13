'use strict';
/*
Task 1
*/

function calculateEngravingPrice(string, price) {
    let stringArray = string.split(' ');
    let stringNumber = stringArray.length;
    let result = stringNumber * price;
    return result
}

console.log(
    calculateEngravingPrice(
      'Proin sociis natoque et magnis parturient montes mus',
      10,
    ),
  );
console.log(
    calculateEngravingPrice(
        'Proin sociis natoque et magnis parturient montes mus',
        20,
    ),
  );
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40));
console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20));