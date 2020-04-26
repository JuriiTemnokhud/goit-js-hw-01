'use strict';

let total = 0;

let message;

do {
  let input = prompt('Введите число');
  input = Number(input);
  if (input !== null) {
    break;
  }
  message = total + input;
} while (true);

alert(`'Общая сумма чисел равна ${message}'`);
