import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import MoreNews from '../../components/MoreNews';
import Footer from '../../components/Footer';

import Container from './styles';

function App() {
  const [data] = useState([]);

  const fetchMoreNews = async () => {

  };

  useEffect(() => {
    fetchMoreNews();
  }, []);

  return (
    <Container>
      <Header />
      <div className="content">
        <section>
          {data.map((item) => <NewsItem key={Math.random()} item={item} />)}
        </section>
      </div>
      <MoreNews />
      <Footer />
    </Container>
  );
}

export default App;
