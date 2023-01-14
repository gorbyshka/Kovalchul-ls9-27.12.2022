// 3
// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

// eslint-disable-next-line no-unused-vars
function upArray() {
  const arr = [];
  // eslint-disable-next-line no-alert, no-undef
  const num = +prompt('Введите количество массивов в первом массиве');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < num; i++) {
    arr.push([]);

    // eslint-disable-next-line no-alert, no-undef
    const num2 = prompt(`Введите количество елементов${i + 1}`);

    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < num2; j++) {
      // eslint-disable-next-line no-alert, no-undef
      const elem = Number(prompt(`Введите элемент${j + 1}`));
      arr[i].push([elem]);
    }
  }
  // eslint-disable-next-line no-console
  console.log(arr);
}

upArray();
