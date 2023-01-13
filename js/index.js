'use strict';
/**
 *  ================ Example 0 ==================
 *
 */

// function makeMarkUp(root) {
//   const content = [];
//   for (let i = 0; i < 10; i += 1) {
//     content.push(`
//   <section class="section" style="background-color:
//     #${Math.floor(Math.random() * 16777215).toString(16)}; height: 500px
//   "></section>
//   `);
//   }
//   root.insertAdjacentHTML('afterbegin', content.join(''));
// }

/**
 *  ================ Example 1 ==================
 * Створити базову розмітку.(функція вище) Для рутового елементу додати слушач події. Вивести в логи виклик scrollHandler,
 * щоб показати яку кількість разів викликається наша функція.
 *
 */
// const root = document.querySelector('.root');
// const makeMarkup = function (root) {
//   const content = [];
//   for (let i = 0; i < 10; i += 1) {
//     const markup = `<section class="section" style="background-color: #${Math.floor(Math.random() * 16777215).toString(
//       16
//     )}; height: 500px">
//       <h2>${initData.title}<h2>
//     </section>`;

//     content.push(markup);
//   }

//   root.insertAdjacentHTML('afterbegin', content.join(''));
// };
// makeMarkup(root);

// const scrollHandler = function (event) {
//   console.log('HELLO');
// };

// root.addEventListener('scroll', scrollHandler);
/**
 *  ================ Example 2 ==================
 * Під'єднання lodash cdn
 * Обернути наш викли scrollHandler до _.throttle
 *
 * Додати removeEventListener('scroll', _.throttle).
 * Проблема з тим, що trottle поверне нам нову функцію.
 * І для того щоб його видалити необхідно спочатку trottle записати до якоїсь змінної
 */

// const scrollHandler = function (event) {
//   console.log('HELLO');
// };
// // вираз _.throttle(scrollHandler, 1000); повертаэ нофу функцію
// const throttlet = _.throttle(scrollHandler, 1000); //

// root.addEventListener('scroll', throttlet);
// root.removeEventListener('scroll', throttlet);

/**
 *  ================ Example 3 ==================
 * Вкористовуючи _.debounce знайти реалізувати пошук країни. Створити оброблення помилок.
 *
 */

// const searchInputEl = document.querySelector('.js-search-input');
// const outputError = document.querySelector('.js-output-error');
// const countryCardEl = document.querySelector('.js-country-card');

// function showCountry(countryObject) {
//   return `
//     <li class="country-card__item"><span style="margin-right: 20px">Name: </span>${countryObject.name}</li>
//     <li class="country-card__item"><span style="margin-right: 20px">Capital: </span>${countryObject.capital}</li>
//     <li class="country-card__item"><span style="margin-right: 20px">Population: </span>${countryObject.population}</li>
//     <li class="country-card__item"><span style="margin-right: 20px">Area: </span>${countryObject.area}</li>
//   `;
// }

// function inputHandler(event) {
//   const query = event.target.value.trim();
//   const foundContry = countries.find(item => item.name.toLocaleLowerCase() === query.toLocaleLowerCase());
//   if (foundContry) {
//     countryCardEl.innerHTML = showCountry(foundContry);
//     outputError.textContent = '';
//   } else {
//     outputError.textContent = 'Така країна не знайдена';
//     countryCardEl.innerHTML = '';
//   }
// }

// searchInputEl.addEventListener('input', _.debounce(inputHandler, 3000));

/**
 *  ================ Example 3 ==================
 * Image lazyloading
 */

const gallery = document.querySelector('.gallery');
const banner = document.querySelector('.banner__img');

// const makeMarkup = function () {
//   const markup = images.map(item => {
//     return `
//      <li class="gallery__item">
//        <a href="#" class="gallery__link">
//         <img
//           src="${item.url}"
//           data-banner-url="${item.urlLarge}"
//           alt="random image"
//         >
//        </a>
//      </li>
//     `;
//   });
//   return markup.join('');
// };
banner.src = images[0].urlLarge;
// gallery.insertAdjacentHTML('afterbegin', makeMarkup());

// Зробити заміну оснровного фото по кліку на картинку галереї
// Додати lezyloading img використовуючи тег loading="lazy"

// const makeMarkup = function () {
//   const markup = images.map(item => {
//     return `
//      <li class="gallery__item">
//        <a href="#" class="gallery__link">
//         <img
//           src="${item.url}"
//           data-banner-url="${item.urlLarge}"
//           alt="random image"
//           loading="lazy"
//           height="300"
//           width="200"
//         >
//        </a>
//      </li>
//     `;
//   });
//   return markup.join('');
// };

// gallery.insertAdjacentHTML('afterbegin', makeMarkup());

// Додати lezyloading img використовуючи тег lazysizes

const makeMarkup = function () {
  const markup = images.map(item => {
    return `
     <li class="gallery__item">
       <a href="#" class="gallery__link">
        <img
          data-src="${item.url}"
          data-banner-url="${item.urlLarge}"
          alt="random image"
          class="lazyload"
        >
       </a>
     </li>
    `;
  });
  return markup.join('');
};
gallery.insertAdjacentHTML('afterbegin', makeMarkup());
function changeBunnerImage(event) {
  // event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    banner.src = event.target.dataset.bannerUrl;
  }
}
gallery.addEventListener('click', changeBunnerImage);

/**
 * =====================================================================================================================================
 * ========================================= НЕОБОВ'ЯЗКОВО =========================================================================
 * =====================================================================================================================================
 *  ================ Example 0 ==================
 *  Більш складний приклад 0 задачі.
 */

//
// const root = document.querySelector('.root');
// const content = [];

// const makeImages = function (url) {
//   const randomCount = Math.floor(Math.random() * 5);
//   let result = '<div class="image__wrapper">';
//   for (let i = 0; i < randomCount; i += 1) {
//     result += `
//       <img class="image animation" src="${url.replace('[id]', Math.floor(Math.random() * 100))}" data-image="true">
//     `;
//   }

//   return result + '</div>';
// };

// for (let i = 0; i < 10; i += 1) {
//   content.push(`
//   <section class="section" style="background-color:
//     #${Math.floor(Math.random() * 16777215).toString(16)}
//   ">
//     <h2 class="title">
//       ${initData.title} ${i}
//     </h2>
//     <div class="wrapper">
//       <p class="description">
//         ${initData.description}
//       </p>
//       ${makeImages(initData.url)}
//     </div>
//   </section>
//   `);
// }

// root.insertAdjacentHTML('afterbegin', content.join(''));

// const scrollHandler = function () {
//   console.log('HELLO');
//   const screenTop = document.scrollingElement.scrollTop;
//   const screenBottom = screenTop + innerHeight;
//   const images = document.querySelectorAll('[data-image]');
//   images.forEach((item, index) => {
//     {
//       const sectionBootom = item.parentNode.parentNode.parentNode.getBoundingClientRect().bottom;
//       if (sectionBootom < screenBottom) {
//         setTimeout(() => {
//           item.classList.add('active-animation');
//         }, 200 + index * 50);
//       }
//     }
//   });
// };

// root.addEventListener('scroll', scrollHandler);
