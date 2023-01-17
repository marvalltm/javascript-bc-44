/**
 * Task 1
 * Додати функціонал вибору теми на сайті. Здерегти його до localStorage
 */

const body = document.querySelector('body');
const changeTheme = document.querySelector('.theme');

document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  body.className = theme;
});

const saveTheme = function (theme) {
  localStorage.setItem('theme', theme);
};

const changeThemeHandler = function () {
  const theme = body.className === 'dark' ? 'light' : 'dark';
  body.className = theme;
  saveTheme(theme);
};

changeTheme.addEventListener('click', changeThemeHandler);

/**
 * Task 2
 * Обробити данні форми. Зберігати введені данні до localStorage
 * в один ключ userData. Збирати данні до одного обьекту.
 */
// const userData = {
//     name: null,
//     email: null,
//     phone: null,
// }
// const name = document.querySelector("#name")
// const email = document.querySelector("#email")
// const phone = document.querySelector("#phone")
// const form = document.querySelector(".form")

// document.addEventListener('DOMContentLoaded', () => {
//     const data = JSON.parse(localStorage.getItem('userData'))

//     for (const key in data) {
//         if (data[key]) {
//             document.querySelector(`#${key}`).value = data[key];
//             userData[key] = data[key];
//         }
//     }
// })

// form.addEventListener('change', (e) => {
//     userData[e.target.id] = e.target.value;
//     localStorage.setItem("userData", JSON.stringify(userData))
// })
