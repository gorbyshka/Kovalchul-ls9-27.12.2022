// 4
// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const baseString = prompt('Введите строку');
const removeSymbol = prompt(['Введите символы которые хотите удалить']);

function deleteString(baseString, removeSymbol) {

    let result = baseString.split(removeSymbol).join('');
    alert(result);

}

deleteString(baseString, removeSymbol);
