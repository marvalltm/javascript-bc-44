'use strict';

/*
 *  Контекст виконання this
 */

// const shop = {
//   warehouse: [
//     {
//       name: 'SmartFone S1',
//       price: 333,
//       amount: 1,
//     },
//     {
//       name: 'SmartFone S2',
//       price: 333,
//       amount: 1,
//     },
//     {
//       name: 'SmartFone S3',
//       price: 333,
//       amount: 1,
//     },
//   ],

//   addItemToWarehouse(object) {
//     //check warehouse
//     if (this.checkItemInWarehouse(object.name)) {
//       const currentItem = this.warehouse.find(item => item.name === name);
//       currentItem.amount += 1;
//     } else {
//       this.warehouse.push(object)
//     }
//   },

//   checkItemInWarehouse(name) {
//     return this.warehouse.find(item => item.name === name) && true;
//   },
// };

// shop.addItemToWarehouse({
//   name: 'SmartFone S1',
//   price: 333,
//   amount: 1,
// });

//TODO: Розглянемо як this поводиться у звичайних функціях (суворий, не суворий режим)

/*
 * this існує тільки всередині функцій.
 * На this не впливає те де функція була //! ОГОЛОШЕНА.
 * На this впливає те де функція //! ВИКЛИКАЄТЬСЯ.
 */

// Function expression
// const greet1 = function () {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet1();

// // // Function declaration
// function greet2() {
//   console.log('This --->', this);
//   console.log('Hello');
// }

// greet2();

// // // Arrow function
// const greet3 = () => {
//   console.log('This --->', this);
//   console.log('Hello');
// };

// greet3();

//TODO: Розглянемо як this поводиться в методах
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

// const anotherUser = {
//   name: 'Oleksii',
//   age: 50,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// anotherUser.showThis();
// anotherUser.showName();

//TODO: Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const setName = function (value) {
//   this.name = value;
// };

// const user = {
//   name: 'Luis',
//   age: 30,
// };

// user.showUserName = showName;
// user.showUserThis = showThis;
// user.setName = setName;

// // console.log(user);

// user.showUserThis();
// user.showUserName();

// const anotherUser = {
//   name: 'Oleksii',
//   age: 40,
// };

// anotherUser.showUserName = showName;
// anotherUser.showUserThis = showThis;

// // // console.log(anotherUser);

// anotherUser.showUserThis();
// anotherUser.showUserName();

//TODO: Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },
//   showUserName() {
//     console.log(this.name);
//   },
//   showUserName2() {
//     console.log('asjkdfhajkshfjk');
//   },
// };

// const showThis = user.showUserThis;
// const showName = user.showUserName;
// const showName2 = user.showUserName2;
// // console.log(showThis);
// showThis();
// showName();
// showName2();

//TODO: This в callback функціях

// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis() {
//     console.log('This --->', this);
//   },

//   showUserName() {
//     console.log(this.name);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showUserThis;
//   callback();
// };

// someFunction(user.showUserThis);

//TODO: This у стрілочних функціях.
// Стрілочні функції не мають свого this,
// this в стрілках завжди посилається на батьківський this.

// const user = {
//   name: 'Luis',
//   age: 30,

//   changeUserAge(newAge) {
//     console.log('changeUserAge: ', this);
//     // ТАК ПИСАТИ НЕ ТРЕБА - ПРИКЛАД ТОГО ЯК НЕ ТРАБА.
//     // const changeAge = function () {
//     //   console.log(`changeAge: `, this);
//     //   this.age = newAge;
//     // };

//     const changeAge = () => {
//       console.log(`this ---->`, this);
//       this.age = newAge;
//     };

//     changeAge();
//   },
// };

// user.changeUserAge(31);

// const user2 = {
//   name: 'Jhon',
//   age: 50,
//   // ТАК ПИСАТИ Н ТРЕБА - ПРИКЛАД ТОГО ЯК НЕ ТРАБА.
//   changeUserAge: user.changeUserAge,
// };

// user2.changeUserAge(40);
// console.log(user2);

/*
? Яким буде результат виконання цього коду?
*/

// let user = {
//   name: 'Джон',

//   go() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const goFn = user.go;
// goFn();
// user.go();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/

// const makeUser = function () {
//   //   console.log(this);
//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user);
// console.log(user.ref.name);

/*
? Яким буде результат console.log
*/

// function makeUser() {
//   //   console.log(this);
//   return {
//     name: 'Джон',
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();
// // let user = {
// //   name: 'Джон',
// //   ref() {
// //     return this;
// //   },
// // };

// console.log(user.ref()); // user
// console.log(user.ref().name);

/*
? Це ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 10;
//     return this;
//   },

//   down() {
//     this.step -= 5;
//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep();
// Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо зробити це так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

// Змініть код методів up, down та showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

// ladder.up().up().down().showStep(); // ladder.spet + 10
// ladder.up().down().showStep(); // ladder.spet + 10
// ladder.down().showStep(); // ladder.spet - 5
// ladder.showStep(); // ladder === 15
/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами

// console.log(this);
// obj.metod()
// obj -> metod = func
// func <- obj.metod

// const obj = {
//   name: 'SomeName',
//   ref() {
//     return this;
//   },
// };

// const some = function () {
//   console.log(obj.ref().name);
// };

// // some(obj);
// console.log(some);

// function some() {}
// console.dir(some.name);

/*
 * ======================================================================================================
 * call та apply
 * ======================================================================================================
 */

//? Викличте функцію showFullName у контексті об'єкта user

// const showFullName = function (message, number) {
//   console.log(`${message} ${this.firstName} ${this.lastName} ${number}`);
// };

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}, hes name: ${this.age}`);
// };

// showFullName();
// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const user = [
//   {
//     firstName: 'Ernest',
//     lastName: 'Vasquez',
//     age: 30,
//   },
//   {
//     firstName: 'dsada',
//     lastName: 'Vasquez',
//     age: 30,
//   },
//   {
//     firstName: 'asdasda',
//     lastName: 'Vasquez',
//     age: 30,
//   },
//   {
//     firstName: 'asdasd',
//     lastName: 'Vasquez',
//     age: 30,
//   },
// ];

// user.forEach((item, index) => {
//   console.log(item);
//   if (index % 2 !== 0) {
//     showFullName.call(item);
//   }
// });

/**
 *  user = {
        firstName: 'asdasd',
        lastName: 'Vasquez',
        age: 30,
    },
    showFullName.call(item);
    user.showFullName = showFullName()
    user.showFullName()
    delete user.showFullName
 */

// showFullName('Hello', 10);
// user < ----backend
// data < ----backend
// showFullName.call(user, data);
// showFullName.apply(user, ['Hello', 10]);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Lottie',
//   lastName: 'Burgess',
//   age: 40,
// };

// showFullName.call(anotherUser, 'Hi', 20);
// showFullName.apply(anotherUser, ['Hi', 20]);

//* Позичання методу

// const createCurrentDate = function () {
//   //   console.log(arguments);
//   //   const newArr = Array.from(arguments);
//   //   return newArr.join('.');
//   //   return [].join.call(arguments, '.');
// };

// console.log(createCurrentDate(22, 12, 21));

// console.log.call(anotherUser, 'asdasd');

/*
 * ======================================================================================================
 * bind
 * ======================================================================================================
 */

// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);
// showUserFullName();

//* Метод об'єкта у ролі колбека

// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   // let callback = user.showName;
//   callback();
// };

// someFunction(user.showThis.bind(user));

/*
? Що виведе код?
*/

// const f = function () {
//   console.log(this);
// };

// const user = {
//   name: 'Вася',
// };

// const anotherUser = {
//   name: 'Петя',
// };

// const copyFunc = f.bind(user).bind(anotherUser);
// copyFunc();
// console.dir(copyFunc);

/*
 * Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати
 * user.loginOk/loginFail залежно від відповіді.
 * Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   // let ok = user.loginOk;
//   // let fail = user.loginFail;

//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail);

/**
 * Замикання. Bind своїми руками.
 */
// function multiplyCreator(numberStatic) {
//   //виклик під час створення замкання.
//   //   const staticValue = numberStatic;
//   return function (number) {
//     //виклик під час використання замкнутої змінної.
//     return number * numberStatic;
//   };
// }

// const mutlToTen = multiplyCreator(10);
// console.log(mutlToTen(123));

// function bind(fn, object) {
//   const bindedValues = object;
//   return function (...args) {
//     return fn.call(bindedValues, ...args);
//   };
// }

// const bindedFn = bind(
//   function () {
//     console.log(this.name);
//   },
//   { name: 'John' }
// );
// bindedFn();
