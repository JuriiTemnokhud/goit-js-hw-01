'use strict';

let total = 0;

let message;

do {
  let input = prompt('Введите число');
  console.log(input);
  if (input === null) {
    break;
  }
  input = Number(input);
  message = total + input;
} while (!null);

alert(`'Общая сумма чисел равна ${message}'`);
