/**
 * Example 4
 * Перебір об'ектов: for...in та методи Object.keys|values|entries|hasOwnProperty
 */

// const obj = {
//   name: "Bob",
//   age: 25,
//   games: ["footbal", "tenis"],
//   isWork: true,
//   sayHello: function () {
//     console.log("Hello");
//   },
//   contacts: {
//     email: "example@domain.com",
//     phone: "8800-000-00-99",
//   },
// };

// for (const key in obj) {
//   //obj["name"]
//   //obj["age"]
//   console.log(obj[key]);
// }

// for (const key of Object.keys(obj)) {
//   console.log(key, ": ", obj[key]);
// }

// for (const value of Object.values(obj)) {
//   console.log(value);
// }
// for (const [index, value] of Object.entries(obj)) {
//   console.log("index: ", index);
//   console.log("value: ", value);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// console.log(obj);
// console.log(obj.hasOwnProperty("games"));

// console.log(obj);
/**
 * Example 5
 * Методи: freeze, defineProperty
 */

// const obj = {
//   name: "Bob",
//   age: 25,
//   games: ["footbal", "tenis"],
//   isWork: true,
//   sayHello: function () {
//     console.log("Hello");
//   },
//   contacts: {
//     email: "example@domain.com",
//     phone: "8800-000-00-99",
//   },
// };

// Object.freeze(obj);

// obj.name = 'James';
// console.log(obj);

// Object.defineProperty(obj, 'name', {
//   enumerable: false,
//   configurable: false,
//   writable: false,
//   //   value: 'static',
// });

// Object.defineProperty(obj, 'name', {
//   enumerable: true,
//   configurable: true,
//   writable: true,
//   //   value: 'static',
// });

// console.log(obj);
// obj.name = 20;

/**
 * Example 6
 * Работа с масивом объектов
 */
// const users = [
//   {
//     name: "Bob",
//     age: 25,
//   },
//   {
//     name: "Jhon",
//     age: 20,
//   },
//   {
//     name: "James",
//     age: 30,
//   },
// ];

// // //forEach
// // //map
// // //filter
// // //sort
// // //reduce
// users.push({
//   name: "Calvin",
//   age: 50,
// });

// for (const item of users) {
//   console.group(item.name);
//   if (item.name === "Calvin") {
//     item.isWork = true;
//   }
//   // console.log(item);
//   for (const key in item) {
//     console.log(key);
//   }
//   console.groupEnd();
// }

// console.log("This is the outer level");
// console.group();
// console.log("Level 2");
// console.group();
// console.log("Level 3");
// console.warn("More of level 3");
// console.groupEnd();
// console.log("Back to level 2");
// console.groupEnd();
// console.log("Back to the outer level");
// console.log(users);

/**
 * Example 7
 * Всі сутності в js - це об'єкти.
 */
// const munber2 = 10;
// const number = new Number(10);

// console.log(typeof munber2);
// console.log(typeof number);

// console.log(number);

// const string1 = "Wellcome";
// const string = new String("Wellcome");

// console.log(string1.replace("W", "M"));
// console.log(string.replace("W", "M"));
// const array = new Array(10, 20, 30);

// number.property = 5;
// string.someValue = 'lolo';
// array.MEGAINDEX = 10;

// console.log(number);
// console.log(string);
// console.log(array);

// console.log(number * number);
// console.log(string.toLowerCase());
// console.log(array.length);

/**
 * Example 8
 * Власні властивості, та не власні властивості.
 */

// const obj = {
//   cat: "Catty",
//   dog: "Doggy",
// };

// const obj2 = Object.create({});
// obj2.slon = "Slonny";

// console.log(obj2);

// for (const key in obj2) {
//   console.log(key);
//   console.log(obj2.hasOwnProperty(key));
// }
// console.log(Object.keys(obj2));

// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

/*
 * Операція spread как замена Object.assign({}, ...sources)
 */

// const user = {
//   firstName: "Jonathan",
//   lastName: "Barnett",
//   age: 30,
// };

// const user2 = { ...user };

// console.log("user: ", user);
// console.log("user2: ", user2);

// user2.firstName = "Birdie";
// user.firstName = "asdasd";

// console.log("user: ", user);
// console.log("user2: ", user2);

/*
 * Розпилення складних типів. Проблема поверхносного роспилення.
 */

// const user = {
//   firstName: "Jonathan",
//   lastName: "Barnett",
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };

// // const user2 = { ...user };
// const user2 = _.cloneDeep(user);
// // const user2 = JSON.parse(JSON.stringify(user));

// // console.log("user: ", user);
// // console.log("user2: ", user2);

// user2.someArr.push(10);

// console.log("user: ", user);
// console.log("user2: ", user2);

/*
 * Example 2
 * Операция rest
 */

/*
 * Example 2
 * Деструктурізація об'єктів
 */

/**
 * Данний об'ект
 */

// const firstName = "aldhjskdhgkjshdg";
// умвно уявимо собі, що ця змінна занята десь вище по коду

const user = {
  firstName: "John",
  lastName: "Reese",
  age: 30,
};
// const { firstName: firstNameFromObject } = user;

// const users = [
//   {
//     firstName: "John",
//     lastName: "Reese",
//     age: 30,
//     isWorked: true,
//   },
//   {
//     firstName: "John",
//     lastName: "Reese",
//     age: 30,
//   },
// ];

// for (const item of users) {
//   const { isWorked = false } = item;
//   console.log(isWorked);
// }

/*
 * Напишіть деструктційне присвоення, котре:
 * для властивості firstName присвоіть до змінної firstName.
 * для властивості age присвоіть до змінної userAge.
 * для властивості isAdmin присвоіть до змінної isAdmin (false, якщо не має такого значення)
 */

// let { firstName, age: userAge, isAdmin = false } = user; //можемо змынювати.
// const { firstName, age: userAge, isAdmin = false } = user;
// console.log(firstName, userAge, isAdmin);

/*
 * Більш глибока деструктурізація об'єктів
 */

// const team = {
//   number: 4,
//   flag: "./images/flag.jpg",
//   employees: ["Anton", "Oleg", "Ronnie", "Carr"],
//   langs: {
//     original: "uk",
//     secondary: "en",
//   },
// };

// const { number, flag, employees, langs } = team;

// console.log(langs);
// const { original, secondary } = langs;
// console.log(original, secondary);

// const {
//   number,
//   flag,
//   employees,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log('number: ', number);
// console.log('flag: ', flag);
// console.log('employees: ', employees);
// console.log('originalLang: ', original);
// console.log('secondaryLang: ', secondary);

/*
 * Деструктурізація масивів
 */

/*
 * Example 1
 * Операция spread как замена concat и slice
 */

/*
 * Копія массива
 */
// const numbers = [1, 2, 3, 4];
// //0: 1
// //1: 2
// //3: 3

// const numbers2 = [...numbers];

// // console.log("numbers: ", numbers);
// // console.log("numbers2: ", numbers2);

// numbers2[0] = 10;

// console.log("numbers: ", numbers);
// console.log("numbers2: ", numbers2);

/*
 * Об'єднання масивів
 */
// const someNumber = 400;
// const numbers = [1, 2, 3, 4, 5];
// const numbers2 = [10, 9, 8, 7];
// const allNumbers = [someNumber, ...numbers, 10, 20, ...numbers2];

// console.log(allNumbers);

/*
 * Розпилення масива в функцію
 */

// const numbers = [1, 2, 3, 4, 5];
// console.log(Math.max(...numbers)); //spread
// const [first, second, third] = numbers;

// function some(...args) {
//   //rest
//   console.log(args);
// }
// some(1, 2, 3, 4, 5, 6, 7);

// const names = ["Herbert Todd", "Belle Soto", "Roger Marsh", "Ethan Lindsey"];
// const [, user1, , user2] = names;
// // const user1 = names[0];
// // const user2 = names[2];
// console.log(user1, user2);

// const rgb = [0, 255, 34];
// const [red, green, blue] = rgb;

// console.log("red: ", red);
// console.log("green: ", green);
// console.log("blue: ", blue);

/*
 * Напишіть функцію sum, котра суммує будь яку кілкість аргументів
 */
// function sum(...args) {
//   console.log(args);
// }

// function sum(...numbers) {
//   let total = 0;
//   for (const value of numbers) {
//     total += value;
//   }
//   return total;
// }

// console.log(sum(1, 2, 3, 4, 5, 6));

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];
// console.log(arr1 === arr2);

// function foo({ username } = {}) {
//   console.log(username);
// }
// foo();

// const rgb = [0, 255, 34];
// const [red, green, blue] = rgb;

// const red = rgb[0];
// const green = rgb[1];
// const blue = rgb[2];

// console.log("red: ", red);
// console.log("green: ", green);
// console.log("blue: ", blue);

// const RGB = {
//   red: red,
//   green: green,
//   blue,
// };

// console.log(RGB);
