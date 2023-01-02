// 1
// Створити функцію 
// яка вираховує середнє арифметичне лише числових елементів даного масиву.

const mass = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
const clone = mass.slice(0);

const getAverage = (clone) => {
    const filterNumber = clone.filter(item => typeof item === 'number');
    const sum = filterNumber.reduce((acc, number) => acc + number, 0);
    const length = filterNumber.length;
    return sum / length;
};

console.log(getAverage(clone)); 
