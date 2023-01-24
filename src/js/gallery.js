// https://unsplash.com/
import { UnsplashAPI } from './unsplash-api';
import makeMarkup from '../templates/gallery-card.hbs';

const gallery = document.querySelector('.js-gallery');
const form = document.querySelector('.js-search-form');
const loadMoreButton = document.querySelector('.js-load-more');
const api = new UnsplashAPI();

const getCollection = () => {
  api.fetchPhotos().then(data => {
    console.log(data);
    gallery.insertAdjacentHTML('beforeend', makeMarkup(data.results));
    if (data.total_pages > api.page) {
      loadMoreButton.classList.remove('is-hidden');
    } else {
      loadMoreButton.classList.add('is-hidden');
    }
    const { bottom } = document.querySelector('.js-gallery').lastElementChild.getBoundingClientRect();
    setTimeout(() => {
      window.scrollBy({
        top: bottom + 2000,
        behavior: 'smooth',
      });
    }, 3000);
  });
};

const formSubmitHandler = event => {
  event.preventDefault();
  gallery.innerHTML = '';
  api.page = 1;
  api.query = event.target.elements['user-search-query'].value;
  getCollection();
};

const loadMoreHandler = event => {
  api.page += 1;
  getCollection();
};

loadMoreButton.addEventListener('click', loadMoreHandler);
form.addEventListener('submit', formSubmitHandler);
