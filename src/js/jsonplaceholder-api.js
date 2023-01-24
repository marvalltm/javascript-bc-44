export class jsonPlaceholderApi {
  constructor() {
    this.page = 1;
    this.baseUrl = `https://jsonplaceholder.typicode.com/posts`;
  }

  fetchPosts() {
    return fetch(this.baseUrl + `?_limit=10&_page=${this.page}`)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}
