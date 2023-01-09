// 4
// Створити функцію, яка прибирає з рядка всі символи,
// які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

const baseString = prompt('Введите строку', 'hello world');
const removeSymbol = prompt('Введите символы которые хотите удалить', ['l', 'd']);

// Первый варинат, более непонятный

// let NO_OF_CHARS = 256;

// function getcountarray(removeSymbol) {
//     const count = new Array(NO_OF_CHARS).fill(0);

//     for (let i = 0; i < removeSymbol.length; i++) {
//         count[removeSymbol.charCodeAt(i)]++;
//     }
//     return count;
// }

// function removeDirtyChars(baseString, removeSymbol) {
//     const count = getcountarray(removeSymbol);
//     let res = '';
//     let num = 0;

//     while (num < baseString.length) {
//         const temp = baseString[num];
//         if (count[temp.charCodeAt(0)] == 0) {
//             res = res.concat(temp);
//         }
//         num++;
//     }
//     return res;
// }

// Второй вариант, более упрощенный

function removeChars(baseString, removeSymbol){
 
    
    for(let i of removeSymbol){

         while(baseString.indexOf(i) != -1){
 
            let itr = baseString.indexOf(i);
            baseString = baseString.replace(i, '');

        }
    }
     return baseString
}

alert(removeChars(baseString, removeSymbol));