// FRONT PART

// XMLHttpRequest

// const url = 'http://localhost:3000/users/get';
// const requers = new XMLHttpRequest();
// requers.open('GET', url);
// requers.send();

// const root = document.querySelector('.root');

// requers.addEventListener('load', () => {
//   if (requers.status === 200) {
//     console.log(JSON.parse(requers.response));
//   } else {
//     root.innerHTML = requers.responseText;
//   }
// });

// const url = 'http://localhost:3000/users/get';

// fetch(url)
//   .then(response => {
//     // console.log(response);
//     // return response.blob();
//     return response.json();
//   })
//   .then(data => console.log(data));

//axios
// import axios from 'axios';
// const url = 'http://localhost:3000/users/get';

// axios(url).then(({ data }) => console.log(data));

/**
 *  BINANCE TASK 1
 *  Заброаты пары монеток, вивести поточный куст.
 *  Створити оновлення пар по інтервалу. Малювати стріточку ↓ залежно від курсу ↑
 */

import axios from 'axios';
const baseURL = 'https://api.binance.com';
const priceRoute = '/api/v3/ticker/price';
const root = document.querySelector('.root');

const filterMonet = data => {
  return data.filter(item => item.symbol.includes('USDT'));
};

const makeMurkUp = array => {
  const currentArray = array.slice(0, 10);
  root.innerHTML = currentArray
    .map(item => {
      return `
      <li class="item">
        <span class="symbol">${item.symbol}</span>
        <span class="price">${item.price}</span>
      </li>
    `;
    })
    .join('');
};

axios(baseURL + priceRoute)
  .then(({ data }) => makeMurkUp(filterMonet(data)))
  .catch(err => console.log(err));
