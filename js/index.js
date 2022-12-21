// "use strict";

/**
 * Example 1
 * Літерал об'екта, Синтаксис, Звернення до властивостей (через . через ['key']),
 * Перезапис значення. Додавання нових властивостей. Видалення об'ектів, видалення властивостей.
 * Копіювання Object.assign({}, object), {...object}.
 */

// const user = {
//   name: "John",
//   age: 25,
//   married: true,
//   contacts: {
//     phone: "88005040044",
//     email: "example@domin.com",
//     a: {
//       b: "some",
//       c: "asdasda",
//     },
//   },
//   payHistory: [1000, 2222, 3333, 333],

//   // sayHello: function () {
//   //   console.log("Hello");
//   // },
//   sayHello() {
//     console.log("Hello");
//   },
// };
// user.sayHello();
// console.log(user["contacts"]["a"]["b"], user["contacts"]["a"]["c"]);

//user["contacts"]; на це місце повернеться {
//   phone: "88005040044",
//   email: "example@domin.com",
//   a: {
//     b: "some",
//   },
// },

//obj["a"]  === на це місце повернеться   //   a: {
//     b: "some",
//   }

//obj["b"] === some

// console.log(user["contacts"]["a"]["b"]);'

// Перезапис властивостей

// user.name = "Eric";
// user["name"] = "James";
// user.contacts = "jjj"; // не треба так робити.

// user.payHistory.push(666, 7777); // [1000, 2222, 3333, 333, 666, 7777]
// console.log(user);

// user.friend = ["Mikel"];
// user["friend"] = ["Mikel", "John", "Bob"];

// // delete user.friend;
// user.mainFriend = user.friend[0];

// console.log(user);

// const newUser = Object.assign({}, user);
// const newUser = { ...user };

// user.name = "111";
// newUser.name = "222";

// user.payHistory.push(10);
// newUser.payHistory.push(20);

// user.contacts.index = 99999;

// console.log(user);
// console.log(newUser);

//  ====== DEEP COPY ======
// const newUser = JSON.parse(JSON.stringify(user));

// user.name = "111";
// newUser.name = "222";

// user.payHistory.push(10);
// newUser.payHistory.push(20);

// user.contacts.index = 99999;
// // newUser.sayHello();
// console.log(user);
// console.log(newUser);

/**
 * Example 2
 * Властивості та методи об'екта.
 */

// {
//   key: "значення" // властивість
//   someFn() {
//     //метод
//   }
// }

/**
 * Example 3
 * this в методах об'екта при звертанні до властивостей.
 */

//close - це одне й те саме
//window. - це одне й те саме
//this. - це одне й те саме

// function some() {
//   console.log(this);
// }

// some();

// const obj = {
//   name: "Bob",
//   age: 25,
//   contacts: {
//     email: "example@gmail.com",
//   },
//   getThis: function () {
//     console.log(this);
//   },
//   getName() {
//     // console.log(this.name);
//     // console.log(this.contacts.email);
//     this.getThis();
//   },
//   setAge: function (value) {
//     this.age = value;
//   },
// };

// obj.getName();

// const func = obj.getThis;
// func();

// // console.log(this);
// obj.getThis();
// obj.age = 26;
// obj.setAge(27);
// obj.getName();

/**
 * Example 4
 * Перебір об'ектов: for...in та методи Object.keys|values|entries|hasOwnProperty
 */

const obj = {
  name: "Bob",
  age: 25,
  games: ["footbal", "tenis"],
  isWork: true,
  sayHello: function () {
    console.log("Hello");
  },
  contacts: {
    email: "example@domain.com",
    phone: "8800-000-00-99",
  },
};

// for (const key in obj) {
//   //obj["name"]
//   //obj["age"]
//   console.log(obj[key]);
// }

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

// console.log(obj.hasOwnProperty('cat'));

// console.log(obj);
/**
 * Example 5
 * Методи: freeze, defineProperty
 */

// const obj = {
//   name: 'Bob',
//   age: 25,
//   games: ['footbal', 'tenis'],
//   isWork: true,
//   sayHello: function () {
//     console.log('Hello');
//   },
//   contacts: {
//     email: 'example@domain.com',
//     phone: '8800-000-00-99',
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
//     name: 'Bob',
//     age: 25,
//   },
//   {
//     name: 'Jhon',
//     age: 20,
//   },
//   {
//     name: 'James',
//     age: 30,
//   },
// ];

// //forEach
// //map
// //filter
// //sort
// //reduce
// users.push({
//   name: 'Calvin',
//   age: 50,
// });
// for (const item of users) {
//   console.group(item.name);
//   if (item.name === 'Calvin') {
//     item.isWork = true;
//   }
//   for (const key in item) {
//     console.log(key);
//   }
//   console.groupEnd();
// }

// console.log(users);

/**
 * Example 7
 * Всі сутності в js - це об'єкти.
 */
// const munber2 = 10;
// const number = new Number(10);
// console.log(typeof munber2);
// console.log(typeof number);
// const string = new String('Wellcome');
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
//   cat: 'Catty',
//   dog: 'Doggy',
// };

// const obj2 = Object.create(obj);
// obj2.slon = 'Slonny';
// console.log(obj2);

// for (const key in obj2) {
//   console.log(key);
//   console.log(obj2.hasOwnProperty(key));
// }
// console.log(Object.keys(obj2));
