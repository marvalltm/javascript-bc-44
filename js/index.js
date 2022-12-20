// "use strict";

/**
 * Example 1
 * Функціональний фираз та оголошення функції
 */
// some();

//function declaration
// function some() {
//   console.log("here");
// }

//function expression
// const some = function () {
//   console.log("here");
// };

// some();

/**
 * Example 2
 * Аргументи та параметри, дефолтні значення параметрів
 */

// const users = ["Jhon", "Bob", "James"];

// const getUserName = function (index = 0, value = 10, some = "some") {
//   console.log("getUserName", "index: ", index);
//   //   console.log("getUserName", "value: ", value);
//   //   console.log("getUserName", "some: ", some);
//   //function (index) параметри

//   console.log(users[index]); // виконує дію, повртає undefined
// };

// // getUserName(23, 1, "word"); // аргументи
// // getUserName();
// getUserName(1);
// console.log(users[1]);

/**
 * Example 3
 * Повернення значення (return)
 */

// const users = ["Jhon", "Bob", "James"];

// const getUserName = function (index) {
//   // return undefined
//   return users[index];
// };

// const name = getUserName(1);
// console.log(name);
// console.log(getUserName(1));

/**
 * Example 4
 * Порядок виконування коду та стек викликів функцій
 */

// function fn1() {
//   console.log("fn1 work");
//   console.log("next work fn2");
//   fn2();
//   console.log("finish fn1");
// }
// function fn2() {
//   console.log("fn2 work");
//   console.log("next work fn3");
//   fn3();
//   console.log("finish fn2");
// }
// function fn3() {
//   console.log("fn3 work");
//   console.log("next work NULL");
//   console.log("finish fn3");
// }

// fn1();

/**
 * Example 5
 * Область бачення функції
 */

// const users = ["Jhon", "Bob", "James"];

// const getUserName = function (index) {
//   const users = ["Vova", "Vaesil", "Egor"];

//   const some = function (i) {
//     const users = ["Jhon", "Bob", "James"];

//     return users[i];
//   };
//   const name = some(index);
//   return name;
// };

// // const fn = function () {

// //   console.log(customers);
// // };

// console.log(getUserName(2));
// fn();
/**
 * Example 6
 * Псевдомасив arguments
 */
// console.log(Array());
// const array = [1, 2, 5, 6, 7];
// console.log("ARRAY: ", array);

function summ() {
  // arguments спеціальне зарезервоване слово яке дає можловіть
  // отримувати список всіх аргументів у вигляді масиву
  // доступне тільки в середині функції. Для arguments не існують методи масивів.
  // return arguments.map(item => item); // не працює
  // перетворити масив можна Array.from(arguments)
  // console.log("ARGS: ", Array.from(arguments));

  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }

  return total;
}
// summ(1, "Vova", true);

console.log(summ(1, 2, 3, 4, 5));

// function summ(name, ...args) {
//   // Актуальний синтаксис використання аргументів.
//   console.log(name);
//   console.log(args);
// }

// summ('Vova', 1, 2, 3, 4, 5);

/**
 * Example 7
 * Отладка коду в браузері Chrome
 */
// fn1();

// function fn1() {
//   console.log('fn1 work');

//   fn2();
// }
// function fn2() {
//   console.log('fn2 work');

//   fn3();
// }
// function fn3() {
//   console.log('fn3 work');

//   const some = 10;
//   some = 20;
// }

/**
 * Example 8
 * Паттерн «Раннє повернення»
 */

// const someInformation = {
//   cat: "Catty",
//   dog: "Doggy",
// };

// function getInformation(currentKey, info) {
//   if (!currentKey) {
//     throw new Error("Key was not hand over");
//   }

//   if (!info[currentKey]) {
//     throw new Error("Can not fount current key in info");
//   }

//   return info[currentKey];
// }

// console.log(someInformation["cat"]);
// console.log(getInformation());
// console.log(getInformation("slon", someInformation));
// console.log(getInformation("cat", someInformation));

// Additional example
// function concat(...args) {
//   const newArr = args;
//   //   console.log(newArr);

//   const array = [];
//   for (const arg of args) {
//     if (Array.isArray(arg)) {
//       for (const item of arg) {
//         array.push(item);
//       }
//     } else {
//       array.push(arg);
//     }
//   }

//   return array;
// }
// console.log(concat([1, 2, 3], [4, 5], [6, 7])); // ➞ [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])); // ➞ [1, 2, 3, 4, 5, 6, 7]
// // concat([1, 2], [3, 4]); // ➞ [1, 2, 3, 4]
// // concat([4, 4, 4, 4, 4]); // ➞ [4, 4, 4, 4, 4]
// console.log(concat(1, 2, 3, [2, 2]));
