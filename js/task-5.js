'use strict';

const isDelivery = prompt('Укажите страну доставки');

const result = isDelivery.toLowerCase();

console.log(result);

let message;

let message1;

switch (result) {
  case 'китай':
    message = 'Китай';
    message1 = 100;
    break;
  case 'чили':
    message = 'Чили';
    message1 = 250;
    break;
  case 'австралия':
    message = 'Австралия';
    message1 = 170;
    break;
  case 'индия':
    message = 'Индия';
    message1 = 80;
    break;
  case 'ямайка':
    message = 'Ямайка';
    message1 = 120;
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);

console.log(message1);

alert(`Доставка в ${message} будет стоить ${message1} кредитов`);
