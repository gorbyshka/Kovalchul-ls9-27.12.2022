// 4
// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

// eslint-disable-next-line no-alert, no-undef
const baseString = prompt('Введите строку', 'hello world');
// eslint-disable-next-line no-alert, no-undef
const removeSymbol = prompt('Введите символы которые хотите удалить', ['l', 'd']);

// eslint-disable-next-line no-shadow
function removeChars(baseString, removeSymbol) {
  const newStr = baseString.split('');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < removeSymbol.length; i++) {
    // eslint-disable-next-line max-len
    while (newStr.indexOf(removeSymbol[i]) !== -1) {
      newStr.splice(newStr.indexOf(removeSymbol[i]), 1);
    }
  }
  return newStr.join('');
}

// eslint-disable-next-line no-alert, no-undef
alert(removeChars(baseString, removeSymbol));
