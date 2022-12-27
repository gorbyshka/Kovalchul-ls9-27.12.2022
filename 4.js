// 4
// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

let stringRandom = prompt('Введите строку');

function func() {
    let idNumber = Number(prompt('Введите количество попыток изменения: (от 1 до 2)'));

    for (let i = 0; i < idNumber; i++) {

        let fSymbol = Number(prompt('Выберите индекс :'));
        let str = stringRandom;
        let newStr;

        if (idNumber === 1) {
            newStr = str.slice(0, fSymbol) + str.slice(fSymbol + 1);

        } else if (idNumber === 2) {
            newStr = str.slice(0, fSymbol) + str.slice(fSymbol + 2);
        } console.log(newStr);
    }
}

func();
