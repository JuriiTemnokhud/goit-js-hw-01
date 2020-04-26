'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

const result = prompt('Введите пароль');

let message;

if (ADMIN_PASSWORD === result) {
  message = 'Добро пожаловать!';
} else if (result === null) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
