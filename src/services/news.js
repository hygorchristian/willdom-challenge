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

  getWatchNews(params) {
    const sparams = JSON.stringify(params);
    return new Promise((resolve, reject) => {
      const lastQ = localStorage.getItem('getWatchNewsID');
      if (sparams === lastQ) {
        const results = localStorage.getItem('getWatchNewsResults');
        resolve(JSON.parse(results));
      } else {
        this.api.get('search', { params }).then((response) => {
          localStorage.setItem('getWatchNewsID', sparams);

          const res = {
            total: Math.ceil(response.data.totalArticles / 10),
            articles: response.data.articles,
          };

          localStorage.setItem('getWatchNewsResults', JSON.stringify(res));
          resolve(res);
        }).catch(reject);
      }
    });
  }
}

export default new News();
