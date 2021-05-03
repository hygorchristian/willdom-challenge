import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Header from './components/Header';
import NewsItem from './components/NewsItem';
import MoreNews from './components/MoreNews';
import Footer from './components/Footer';
import NewsApi from './services/news';
import Global from './styles/global';

import Container from './styles';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMoreNews = async () => {
    if (totalPages > page) {
      const response = await NewsApi.getWatchNews({
        q: 'luxury watches',
        page: page + 1,
      });
      const { articles, total } = response;

      // mocked articles fn
      // const articles = await NewsApi.getSavedNews();

      const newdata = [...data, ...articles];
      setData(newdata);
      setPage(page + 1);
      setTotalPages(total);
    }
  };

  useEffect(() => {
    fetchMoreNews();
  }, []);

  return (
    <>
      <Global />
      <Container>
        <Header />
        <InfiniteScroll
          dataLength={data.length}
          hasMore={page !== totalPages && page}
          next={fetchMoreNews}
        >
          <div className="content">
            <section>
              {data.map((item) => <NewsItem key={Math.random()} item={item} />)}
            </section>
          </div>
        </InfiniteScroll>
        <MoreNews />
        <Footer />
      </Container>
    </>
  );
}

export default App;
