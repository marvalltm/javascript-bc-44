/*
 * Проміси resolve, reject
 * then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve([{ name: 'John' }]);
//   } else {
//     reject('Some Problem');
//   }
// });

// console.log('before promise result');
// console.log(promise);
// console.log('after promise result');

// promise
//   .then(data => {
//     //дія після позитивного результату виконання промісу. Коли спрацював resolve
//     console.log(data);
//   })
//   .catch(error => {
//     //дія після негативного результату виконання промісу. Коли спрацював reject
//     console.log(error);
//   })
//   .finally(() => {
//     //дія після будь якого результату виконання промісу. Коли спрацював resolve чи reject
//   });

// const promise = new Promise((resolve, reject) => {
//   let interval = setInterval(() => {
//     console.log('TICK');
//     const num = Math.random();
//     if (num > 0.69) {
//       resolve(num);
//     }
//   }, 1000);

//   setTimeout(() => {
//     reject('Timeout');
//     clearInterval(interval);
//   }, 10000);
// });

// promise
//   .then(data => {
//     //дія після позитивного результату виконання промісу. Коли спрацював resolve
//     console.log(data);
//   })
//   .catch(error => {
//     //дія після негативного результату виконання промісу. Коли спрацював reject
//     console.log(error);
//   })
//   .finally(() => {
//     //дія після будь якого результату виконання промісу. Коли спрацював resolve чи reject
//     console.log(promise);
//   });

// console.log(promise);
//? конструктор new Promise(callback(resolve, reject));
//? then(onSuccess, onError)
//? ланцюжок промісів та catch(onError)

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     const num = Math.random();
//     if (num > 0.5) {
//       res(num);
//     } else {
//       rej();
//     }
//   }, 3000);
// });

// promise
//   .then(data => {
//     console.log('FIRST THEN: ', data);
//     return data;
//   })
//   .then(data => {
//     console.log('SECOND THEN: ', data);
//     let newNumn = data + 1;
//     return newNumn;
//   })
//   .then(data => console.log('THIRD THEN: ', data))
//   .catch(err => console.log('ERROR'));

//? TASK 02
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined
//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Що буде у консолі

// const promise = new Promise((resolve, reject) => {
//   resolve('promise');
// });

// console.log(1); // 1

// promise
//   .then(data => {
//     setTimeout(() => {
//       console.log(2); // 7
//     }, 1000);
//   })
//   .then(data => {
//     setTimeout(() => {
//       console.log(3); // 5
//     }, 0);
//   })
//   .then(() => {
//     console.log(4); // 3
//   });

// setTimeout(() => {
//   console.log(5); // 4
// }, 0);

// setTimeout(() => {
//   console.log(6); // 6
// }, 1000);

// console.log(7); // 2

// ===========================================================

// console.log(1);

// setTimeout(() => {
//   console.log(4);
// }, 0);

// setTimeout(() => {
//   console.log(5);
// });

// const promise = new Promise((res, rej) => {
//   res(3);
// });

// promise.then(data => {
//   console.log(data);
// });

// console.log(2);

// ==================================================
// ==================================================
// ==================================================

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

/*
 * Завантаження скриптів
 */
//? Створіть функцію loadScript(url), яка буде створювати та додавати скрипт на сторінку

// const loadScript = (url, onSuccess, onError) => {
//   const script = document.createElement('script');
//   script.src = url;
//   document.querySelector('body').append(script);

//   script.addEventListener('load', event => {
//     onSuccess('LOADED: ' + url);
//   });

//   script.addEventListener('error', event => {
//     onError('ERROR: ' + url);
//   });
// };

// function onSuccess(event) {
//   console.log(`script loaded: `, event);
// }
// function onError(event) {
//   console.log(`script failed: `, event);
// }

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);
//     loadScript(
//       'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
//       message => {
//         console.log(message);
//         loadScript(
//           'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           error => {
//             console.log(error);
//           }
//         );
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// );

//? Передайте кобэк, який буде викликатися по завершеню завантаженя скрипта
//? Опрацюйте помилки
//? Завантаженя декількох скриптів
//? Пекельна піраміда колбеків
//? Рішення через проміси

// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js

// const loadScript = url => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;
//     document.querySelector('body').append(script);

//     script.addEventListener('load', () => {
//       resolve('LOADED: ' + url);
//     });

//     script.addEventListener('error', () => {
//       reject('FAILED: ' + url);
//     });
//   });
// };

// loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
//   .then(data => {
//     console.log(data);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js');
//   })
//   .then(data => {
//     console.log(data);
//     return loadScript('https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

// ========================================================
// ========================================================
// ========================================================

// https://api.github.com/users/marvall

// function fetchUserFromGithub(url) {
//   return new Promise((resolve, reject) => {
//     const requestToGitHub = new XMLHttpRequest();
//     requestToGitHub.open('GET', url);
//     requestToGitHub.send();

//     requestToGitHub.addEventListener('load', () => {
//       if (requestToGitHub.status === 200) {
//         resolve(requestToGitHub.responseText);
//       } else {
//         reject(requestToGitHub.status);
//       }
//     });
//   });
// }

// fetchUserFromGithub('https://api.github.com/users/marvall')
//   .then(data => console.log(JSON.parse(data)))
//   .catch(err => console.log(err));

// ======================= Promis.all() race() any() ============================

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, { promise: 'one', data: [] });
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ promise: 'two', data: [] });
  }, 500);
});

const p3 = new Promise((resolve, reject) => {
  // setTimeout(resolve, 3000, { promise: 'three', data: [] });
  reject('reject p3');
});

const p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, { promise: 'four', data: [] });
});

// const p5 = new Promise((resolve, reject) => {
//   // Этот промис прервёт Promise.all
//   reject('reject p5');
// });

/**
 * PROMISE ALL
 */

// Promise.all([p1, p2, p3, p4, p5])
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log(error));

/**
 * PROMISE ANY
 */

// Promise.any([p1, p2, p3, p4, p5]).then(value => {
//   console.log(value);
// });

/**
 * PROMISE RACE
 */

// Promise.race([p1, p2, p4]).then(value => {
//   console.log(value);
// });
