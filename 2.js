// 2
//Написати функцію doMath(x, znak, y)
// яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
//Вивести результат математичної дії, вказаної в змінній znak.
//Обидва числа і знак виходять від користувача.

const x = Number(prompt('Введите первое число'));
const znak = (prompt('Введите знак'));
const y = Number(prompt('Введите второе число'));
let result;

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
        case '**':
            result = x ** y;
            break;
        default:
            alert('Error');
    }
    return alert(x + znak + y + '=' + result);
}

doMath(x, znak, y);
