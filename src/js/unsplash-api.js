export class UnsplashAPI {
  constructor() {
    this.page = 1;
    this.baseUrl = 'https://api.unsplash.com';
    this.apiKey = '_qTG6-PYsqqQghIiyqCV2T_m0kPrw6S64iJ18ECz_84';
    this.query = null;
    this.per_page = 20;
  }

  /**
   * Get photos collection from unsplash.com
   * @returns {Promise} photos Collection
   */
  fetchPhotos() {
    const searchParams = new URLSearchParams({
      query: this.query,
      page: this.page,
      per_page: this.per_page,
      client_id: this.apiKey,
    });

    return fetch(`${this.baseUrl}/search/photos?${searchParams}`)
      .then(response => response.json())
      .catch(err => console.log(err));
  }
}
