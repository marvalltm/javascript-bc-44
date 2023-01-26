// import axios from 'axios';
// const query = 'Spadfdfdfdf';
// const gg = `?fields=name,capital,languages,flags,population`;
// // axios(`https://restcountries.com/v3.1/name/${query}${gg}`)
// //   .then(data => console.log(data))
// //   .catch(err => console.log(err));

// fetch(`https://rickandmortyapi.com/api/episode/10`)
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Some one have problem');
//     }
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// import makeGallery from '../templates/gallery-card.hbs';

// makeGallery([
//   {
//     urls: { small: 'some' },
//     alt_description: 'some',
//   },
// ]);

import axios from 'axios';

const encodedParams = new URLSearchParams();
encodedParams.append('q', 'English is hard, but detectably so');

const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
