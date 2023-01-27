/**
 * Async Await. Написпти звернення за усіма юзерами виеористовуючи:
 * 1. Async Await + fetch
 * 2. Async Await + axios
 * Базовий URL: http://localhost:3000/user/all
 */

// async function someFunction() {}
// const someFunction = async function () {};
// const someFunction = async () => {};

//const baseURL = 'http://localhost:3000/user/all';

/**
 * 1. Async Await + fetch
 */

// const someFunction = async function () {
//   try {
//     const response = await fetch(baseURL);
//     if (response.ok) {
//       const data = await response.json();
//       if (data) console.log('response1: ', data);
//     } else {
//       throw new Error('Some Problem 1');
//     }

//     const response2 = await fetch(baseURL + 'l');
//     if (response2.ok) {
//       const data = await response.json();
//       if (data) console.log('response2: ', data);
//     } else {
//       throw new Error('Some Problem 2');
//     }
//   } catch (e) {
//     console.log(e);
//   }
// };

// someFunction();

/**
 * RETURN from Async
 */

// const someFunction = async function () {
//   const response = await fetch(baseURL);
//   if (response.ok) {
//     return await response.json();
//   } else {
//     throw new Error('Some Problem 1');
//   }
// };

// const someFunc2 = async function () {
//   const result = await someFunction();
//   const result2 = await someFunction();
//   if (result2 && result) console.log(result, result2);
// };

// someFunc2();

// const getCountries = async function () {
//   try {
//     const response = await fetch();
//     if (!response.ok) {
//       throw new Error('Bad request');
//     }
//     const data = await response.json();
//     if (data.length > 10) {
//       someFunc1();
//     }
//   } catch (e) {
//     Notiflix.failure('Bad request');
//   }
// };

/**
 * 2. Async Await + axios
 */

// import axios from 'axios';
// const baseURL = 'http://localhost:3000/user/alll';

// const httpApi = axios.create({
//   baseURL,
//   method: 'get',
// });

// const fetchAllUsers = async function () {
//   try {
//     const { data } = await httpApi();
//     return data;
//   } catch (e) {
//     console.log(e.message);
//   }
// };

// const handleClick = async event => {
//   const result = await fetchAllUsers();
//   // Обробка чи рендер данних
//   if (result) {
//     console.log('result: ', result);
//   }
// };

// const button = document.querySelector('.action_request');
// button.addEventListener('click', handleClick);

/*
 * ========================= ===== ====================================
 * ========================= TASKS ====================================
 * ========================= ===== ====================================
 */

/**
 *  Написати авторізацію користувачів до локального сервера.
 *  Після авторизації Юзер маєможливість доступу до інших сервісів.
 */
