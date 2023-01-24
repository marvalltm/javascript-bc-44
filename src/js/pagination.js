import { jsonPlaceholderApi } from './jsonplaceholder-api';
import makeCollection from '../templates/posts.hbs';

const gallery = document.querySelector('.js-posts');
const loadMore = document.querySelector('.js-load-more');
const api = new jsonPlaceholderApi();

const renderCollection = function () {
  api.fetchPosts().then(data => {
    gallery.insertAdjacentHTML('beforeend', makeCollection(data));
  });
};

renderCollection();

const getNewCollection = event => {
  api.page += 1;
  renderCollection();
};

loadMore.addEventListener('click', getNewCollection);
