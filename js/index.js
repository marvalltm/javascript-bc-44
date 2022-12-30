'use strict';

/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const human = {
//   hand: 2,
//   sayHello() {
//     console.log('hello');
//   },
// };

// const worker = Object.create(human, {});
// worker.salary = 1000;
// worker.getSalary = function () {
//   return this.salary;
// };

// console.log(worker.hasOwnProperty('salary')); // перевірка власних властивостей.

//перебір властивостей об'екта

// for (const key in worker) {
//   console.log(key, ' ____ ', worker.hasOwnProperty(key));
// }

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//? Функція конструктор
// const Worker = function (option) {
//   this.salary = option.salary;
//   this.getSalary = option.getSalary;
//   return this;
// };

// const worker = new Worker({
//   salary: 1000,
//   getSalary() {
//     console.log(this.salary);
//   },
// });

// Worker.prototype.getSalary = function () {
//   console.log(10);
// };

// const worker2 = new Worker({
//   salary: 1000,
//   getSalary() {
//     console.log(this.salary);
//   },
// });

// worker2.getSalary();

// const Person = function ({ firstName, lastName, age, hairColor, eyesColor } = {}) {
//   // this = {};
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.legs = 2;
//   this.hands = 2;
//   this.eyes = 2;
//   this.hairColor = hairColor;
//   this.eyesColor = eyesColor;
//   return this;
// };

// Person.prototype.changeHairColor = function (newHairColor) {
//   this.hairColor = newHairColor;
// };

// Person.prototype.changeFirstName = function (newName) {
//   this.firstName = newName;
// };

// const person = new Person({
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 30,
//   hairColor: 'black',
//   eyesColor: 'brown',
// });

// const person2 = new Person({
//   firstName: 'Andriy',
//   lastName: 'Smith',
//   age: 20,
//   hairColor: 'black',
//   eyesColor: 'brown',
// });

// console.log(person);
// console.log(person2);

// person.changeHairColor('brown');
// person.changeFirstName('Susie');

// const person2 = new Person({
//   firstName: 'Emily',
//   lastName: 'Henderson',
//   age: 20,
//   hairColor: 'pink',
//   eyesColor: 'blue',
// });

// person2.changeFirstName('Teresa');

// console.log(person);
// console.log(person2);

// ===========================================================================
// ===========================================================================
// ===========================================================================

/*
 * Класи: оголошення, конструктор, методи (class, constructor)
 * Приватні властивості та методи // умовно приватні властивості.
 * Статичні властивості та методи
 * Геттери та сеттери
 * Створити класс User.
 */

// class Person {
//   #firstName;
//   #lastName;
//   constructor(options) {
//     this.#firstName = options.firstName;
//     this.#lastName = options.lastName;
//     this.age = options.age;
//     this.salary = options.salary;
//   }

//   //   showName() {
//   //     console.log(this.#name);
//   //   }

//   get name() {
//     return `${this.#firstName} ${this.#lastName}`;
//   }
//   set name(value) {
//     if (typeof value === 'string') {
//       const parts = value.split(' ');
//       if (parts.length === 2) {
//         this.#setFirstName(parts[0]);
//         this.#lastName = parts[1];
//       }
//     }
//   }
//   // приватний метод,доступній тільки для інших методій в середині єкземпляру класса.
//   #setFirstName(value) {
//     this.#firstName = value;
//   }
// }

// const person = new Person({ lastName: 'Smith', firstName: 'John', age: 25, salary: 1000 });

// person.name = 'James Some';
// // console.log(person.#name);

/**
 * Статичні методи і властивості
 */

// class Config {
//   static address = 'Kiev, some st, 33';
//   static getDistanse(point) {
//     return point * 1000;
//   }
//   getSomeDistanse() {
//     return point * 5000;
//   }
// }

// console.log(Config.address);
// console.log(Config.getDistanse(12));

// const config = new Config();
// console.log(config);
// config.getDistanse(12);

//Math.pow()
//Math.sqrt()
//Math.sin()

//Object.keys(object);
//Object.value(object);
//Object.defineProperties()

/*
 * Наслідування з extends та super. Створити класс Сlient та Employeer наслідуючі класс User.
 * Створити класс Developer та Manager наслідуючі класс Employeer.
 */

// class User {
//   constructor(props) {
//     this.login = props.login;
//     this.password = props.password;
//     this.type = 'user';
//   }

//   sayWhoIs() {
//     console.log(`I am "${this.type}"`);
//   }
// }

// const user = new User({
//   login: 'johnsmith',
//   password: '11111111',
// });

// console.log(user);
// user.sayWhoIs();

// class Client extends User {
//   constructor(props) {
//     super(props); // доступный в середині конструктору.
//     this.discont = props.discont;
//     this.type = 'clinent';
//   }

//   buyProduct() {
//     console.log('buyProduct');
//   }
//   getCard() {
//     console.log('getCard');
//   }
//   pay() {
//     console.log('pay');
//   }
// }

// const client = new Client({
//   login: 'somePeople',
//   password: '112211',
//   discont: '20%',
// });

// console.log(client);
// client.sayWhoIs();

// class Employeer extends User {
//   #salary;
//   constructor(props) {
//     super(props);

//     this.#salary = props.salary;
//     this.type = 'employeer';
//   }
//   getAccessToAdmin() {
//     console.log('getAccessToAdmin');
//   }
//   getSalary() {
//     return this.#salary;
//   }
// }

// const employeer = new Employeer({
//   login: 'Eric0001',
//   password: '112211',
//   salary: 1000,
// });

// console.log(employeer);
// employeer.sayWhoIs();

// class Manager extends Employeer {
//   constructor(props) {
//     super(props);

//     this.type = 'manager';
//   }

//   getAllSalaryList() {
//     console.log('getAllSalaryList');
//   }
// }

// const manager = new Manager({
//   login: 'Steav888',
//   password: '11234511',
//   salary: 1200,
// });

// manager.sayWhoIs();

// class Developer extends Employeer {
//   constructor(props) {
//     super(props);

//     this.type = 'developer';
//   }

//   getAccessToTickList() {
//     console.log('getAccessToTickList');
//   }

//   sayWhoIs() {
//     console.log('I am 100% Dev');
//   }
// }

// const developer = new Developer({
//   login: 'Jonson',
//   password: '112342221',
//   salary: 2000,
// });

// developer.sayWhoIs();
// console.log(developer.getSalary());

// /**
//  *  ===== PROTOTYPE ======
//  */

// User.prototype.sayWhoIs = function (value) {
//   console.log(value);
// };

// // const user2 = new User({
// //   login: 'ASdasd',
// //   password: 'Asdasd',
// //   type: 'sdfdsf',
// // });

// // user2.sayWhoIs('kjashfansfs text');
// // manager.sayWhoIs('some text');

// Object.prototype.hasOwnProperty = function (value) {
//   console.log(value);
// };

// const obj = {
//   gg: 'gg',
// };

// obj.hasOwnProperty('gg');
