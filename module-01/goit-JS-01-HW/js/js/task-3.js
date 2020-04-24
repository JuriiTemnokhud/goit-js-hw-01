'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';

const result = prompt('Password', '');

const message =
  // eslint-disable-next-line no-nested-ternary
  result === null
    ? 'Отменено пользователем!'
    : result === ADMIN_PASSWORD
    ? 'Добро пожаловать!'
    : 'Доступ запрещен, неверный пароль!';

alert(message);
