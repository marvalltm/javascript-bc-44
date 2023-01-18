// JSON

// const object = {
//   name: 'John',
//   email: 'example@go.com',
//   fn() {
//     console.log();
//   },
// };

// const string = 'sdlhflksjkfj skdf sdfjsdklfjk lsdjfk sjdkfj sdkf';

// const json = JSON.stringify(string);
// console.log(json);
// console.log(JSON.parse(json));

// ========== STORAGE ===========
// getItem, setItem, removeItem, clear

// console.log(window.localStorage);

// localStorage.setItem({ name: 'sdfsd' }, JSON.stringify({ name: 'John' }));
// localStorage.setItem('theme2', JSON.stringify({ name: 'John' }));
// localStorage.setItem('theme3', JSON.stringify({ name: 'John' }));

// const theme = JSON.parse(localStorage.getItem(undefined));
// console.log(theme);

// // localStorage.removeItem('theme');
// // localStorage.clear()

// ========================================================================
// ========================================================================
// ===========================  EXAMPLES ==================================
// ========================================================================

import { save, get } from './storage'; //imports повинні бути зверху файла
// спочатку імпортуемо всі бібліотеки, потім свої файли

document.addEventListener('DOMContentLoaded', e => {
  console.log(e);
  const body = document.querySelector('body');
  const theme = get('theme');
  body.classList.remove('dark');
  body.classList.remove('light');
  body.classList.add(theme ? theme : 'light');
});

const themeRoot = document.querySelector('.theme');
themeRoot.addEventListener('click', e => {
  const body = document.querySelector('body');
  if (body.classList.contains('dark')) {
    body.classList.add('light');
    body.classList.remove('dark');
    save('theme', 'light');
  } else {
    body.classList.add('dark');
    body.classList.remove('light');
    save('theme', 'dark');
  }
});
