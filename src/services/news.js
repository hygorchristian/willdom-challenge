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

  getNews(params) {
    return this.api.get('search', { params });
  }
}

export default new News();
