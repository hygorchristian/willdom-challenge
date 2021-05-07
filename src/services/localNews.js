import mock from './mock.json';

class LocalNews {
  constructor(news) {
    this.news = news;
    localStorage.setItem('news', JSON.stringify(news));
  }

  load = () => {
    const news = localStorage.getItem('news');
    if (news) {
      this.news = JSON.parse(news);
    }
    this.news = [];
  }
}

export default new LocalNews(mock);
