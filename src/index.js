'use strict';

/**
 * Example 1
 * setTimeout(), setInterval() Розібрати,
 * що це за механізми. як працюють, як видалити інтервал.
 */
// console.log('START');
// setTimeout(() => {
//   console.log('with timeout');
// }, 2000);

// let count = 1;
// const callback = () => {
//   console.log('with interval');
//   if (count > 5) {
//     clearInterval(intervalID);
//   }
//   console.log('count: ', count);
//   count += 1;
// };

// const intervalID = setInterval(callback, 2000);
// console.log('intervalID', intervalID);

// let intervalId;
// const button = document.querySelector('.action');
// button.addEventListener('click', e => {
//   e.preventDefault();
//   if (intervalId) {
//     clearInterval(intervalId);
//   }
//   intervalId = setInterval(() => {
//     console.log('INTERVALL');
//   }, 2000);
// });

// const button2 = document.querySelector('.clearInterval');
// button2.addEventListener('click', e => {
//   e.preventDefault();
//   clearInterval(intervalId);
// });

/**
 * Example 2
 * Асинхронність в javascipt. Відкладення подій, до того моменту поки не виконається основний поток.
 */

// console.log('start');

// setTimeout(() => {
//   console.log('in timeout');
// }, 1000);

// for (let i = 0; i < 1000; i++) {
//   console.log('in for');
// }

// setTimeout(() => {
//   console.log('in timeout 2');
// }, 1000);

// console.log('end');

/**
 * Example 3
 * Помилки для setIntervel, чи буде виконуватись інтервал,
 * якщо за ним будуть помилки основного потоку.
 */

// const inteval = setInterval(() => {
//   console.log('TICK');
// }, 1000);

// //інструкція яка викликає помилку.
// number = number + 1;

/**
 * Example 4
 * Що так workers, на прикладі операційної системи. (процесы) Абстракнта модель.
 * Теоритично на прикладі Laravel.
 * На скільки webworkers потрібно знати junior розробнику.
 */

/**
 * Example 5
 * Тестове завдання з якоїсь компанії
 * https://docs.google.com/document/d/146E1Rna-cfooGKfPCfWwnQ4ZK_Y4UKG4LFcwixMEfSI/edit?usp=sharing
 */

/**
 * Example 6
 * Робота з moment.js та основні задачі.
 */

// 1. Інсталяція момент як иодулю.

// 2. Імпорт момент як иодулю.

import moment from 'moment';
//console.log(moment); // перевірка, що ми додали бібліотеку.

// 3. Базові конструкції.

// const time = moment(1674122288130); // передавати значення в ms
// const time = moment();
// const time = moment('11.11.2011');
// const time = moment().unix(); //unix в секундах

// const time = moment().date(); //число
// const time = moment().day(); //день тижня // тиждень від 0-6
// const time = moment().month(); // місяць -1
// const time = moment().year(); // рік
// const time = moment().hour() // година
// const time = moment().minutes(); // хвилина
// const time = moment().seconds() // секунда
// const time = moment().milliseconds() // мілісекунда

// console.log(time);

// UTC - це світовий рівномірний формат часу. метод utc буквально поверне час по 0-му мерідіану.
// const time = moment().utc();

// const time = moment().utc().date() //число
// const time = moment().utc().day() //день тижня
// const time = moment().utc().month() // мысяць -1
// const time = moment().utc().year() // рік
// const time = moment().utc().hour() // година
// const time = moment().utc().minutes() // хвилина
// const time = moment().utc().seconds() // секунда
// const time = moment().utc().milliseconds() // мілісекунда

// console.log(time.format('DD MM YYYY hh:mm:ss'));

//Get та Set для moment

// console.log(moment().get('year'));
// console.log(moment().get('month')); // 0 to 11
// console.log(moment().get('date'));
// console.log(moment().get('hour'));
// console.log(moment().get('minute'));
// console.log(moment().get('second'));
// console.log(moment().get('millisecond'));

// console.log(moment().set('year', 2013));
// console.log(moment().set('month', 3)); // April
// console.log(moment().set('day', 0));
// console.log(moment().set('date', 1));
// console.log(moment().set('hour', 13));
// console.log(moment().set('minute', 20));
// console.log(moment().set('second', 30));
// console.log(moment().set('millisecond', 123));

// format https://momentjs.com/docs/#/displaying/format/

// const time = moment().format(); // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
// const time = moment().format('dddd, MMMM Do YYYY, h:mm:ss a'); // "Sunday, February 14th 2010, 3:25:50 pm"
// const time = moment().format('ddd, hA'); // "Sun, 3PM"
// const time = moment().format("[Today is] dddd");               // "Today is Sunday"

// console.log(time);

/**
 * TASK 1
 * Написати таймер для акції
 */

const root = document.querySelector('.time');

function makeTimer(root) {
  const current = moment();
  current.set('m', 0);
  current.set('s', 0);
  const newData = current.clone().add(1, 'm');
  root.textContent = newData.format('mm:ss');
  const interval = setInterval(() => {
    if (newData.isSame(current)) {
      clearInterval(interval);
      root.textContent = 'Time is Over';
    } else {
      newData.subtract(1, 's');
      root.textContent = newData.format(' mm : ss ');
    }
  }, 1000);
}
makeTimer(root);

// function makeTimer(root) {
//   const current = moment('10.10.2000 00:00:00');
//   const toDate = current.clone().add(1, 'minutes');

//   console.log(current.format('hh:mm:ss'));
//   console.log(toDate.format('hh:mm:ss'));
//   const interval = setInterval(() => {
//     if (toDate.isSame(current)) {
//       clearInterval(interval);
//       root.textContent = 'Time is over';
//     } else {
//       root.textContent = toDate.format(' mm : ss');
//       toDate.subtract(1, 'seconds');
//     }
//   }, 1000);
// }

// makeTimer(root);
