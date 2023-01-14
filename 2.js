// 2
// Написати функцію doMath(x, znak, y)
// яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

// eslint-disable-next-line no-alert, no-undef
const x = Number(prompt('Введите первое число'));
// eslint-disable-next-line no-alert, no-undef
const znak = (prompt('Введите знак'));
// eslint-disable-next-line no-alert, no-undef
const y = Number(prompt('Введите второе число'));
let result;

// eslint-disable-next-line no-shadow
function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      // eslint-disable-next-line no-alert, no-undef
      alert('Error');
  }
  return result;
}

// eslint-disable-next-line no-alert, no-undef
alert(doMath(x, znak, y));
