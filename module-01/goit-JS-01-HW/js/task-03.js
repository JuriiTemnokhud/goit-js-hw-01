const ADMIN_PASSWORD = 'jqueryismyjam';

const password = prompt('Введите пароль');

// console.log(password === ADMIN_PASSWORD('Добро пожаловать!'));

// const rte = password === true;

const message = password === ADMIN_PASSWORD;

console.log('Добро пожаловать!');

const message1 = password === false;

console.log('Доступ запрещен, неверный пароль!');
