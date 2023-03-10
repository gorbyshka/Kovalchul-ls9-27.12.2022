// 1
// Створити функцію
// яка вираховує середнє арифметичне лише числових елементів даного масиву.

const mass = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];

// eslint-disable-next-line no-shadow
const getAverage = (mass) => {
  const clone = [...mass];
  const filterNumber = clone.filter((item) => typeof item === 'number');
  const sum = filterNumber.reduce((acc, number) => acc + number, 0);
  const { length } = filterNumber;
  return sum / length;
};

// eslint-disable-next-line no-console
console.log(getAverage(mass));
