import axios from 'axios';

class News {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://gnews.io/api/v4',
      params: {
        token: process.env.REACT_APP_GNEWS_API_KEY,
      },
    });
  }

  getNews = (search) => this.api.get('search', { params: { q: search } });
}

export default new News();
