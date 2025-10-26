// Lesson 3

// 1

// const fruits = [
//   { id: 0, name: 'Apple' },
//   { id: 1, name: 'Tomat' },
//   { id: 2, name: 'Cherry' },
//   { id: 3, name: 'Orange' },
// ];
// const names = fruits.map(fruit => fruit.name);
// console.log(names);

// 2

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 !== 0) continue;
//   console.log(i);
// }

// 3

// let a = 0;
// while (a < 5) {
//   a++;
//   console.log('a', a);
// }

// або

// let i = 0;

// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
// }

// якщо потрібно почати відлік з 0

// 4

// let number;
// while (true) {
//   number = prompt('Введіть число більше за 100:');
//   if (number === null || number === '') {
//     console.log('Ввыд скасовано або порожній рядок.');
//     break;
//   }
//   number = Number(number);
//   if (number > 100) {
//     console.log('Дякую! Ви ввели число більше за 100:', number);
//     break;
//   }
//   console.log('Число менше або рівне 100, спробуйте ще раз!');
// }

// 5

const girls = [
  { age: 23, name: 'Оля' },
  { age: 29, name: 'Аня' },
  { age: 10, name: 'Юля' },
  { age: 20, name: 'Катя' },
];
const summ = girls.reduce((sum, item) => sum + item.age, 0);
const middle = summ / girls.length;
console.log(`Середній вік:${middle}`);
