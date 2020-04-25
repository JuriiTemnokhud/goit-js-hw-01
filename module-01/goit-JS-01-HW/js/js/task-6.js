'use strict';

let input;

let total = 0;

let message;

do {
  input = prompt('Введите число');
  input = Number(input);
  message = total + +input;
} while (input === null);

alert(`'Общая сумма чисел равна ${message}'`);
