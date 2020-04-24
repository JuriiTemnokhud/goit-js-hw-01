const credits = 23580;

const pricePerDroid = 3000;

const result = prompt('Count droidrs to buy', 0);

const totalPrice = +result * pricePerDroid;

if (result === null) {
  alert('Отменено пользователем!');
} else if (totalPrice > credits) {
  alert('Недостаточно средств на счету!');
} else {
  alert(
    `Вы купили ${result} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`,
  );
}
