import mocks from '../mock.json'

class News{
  constructor(mocks) {
    this.mocks = mocks
  }

  getNews = () => new Promise(resolve => {
    resolve(this.mocks)
  });
}

export default new News(mocks)