'use strict';
/*
Task 2
*/

function calculateEngravingPrice(string, price) {
    return string.split(' ').length * price
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