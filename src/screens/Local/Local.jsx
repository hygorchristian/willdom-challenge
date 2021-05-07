import React, { useState } from 'react';

import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import MoreNews from '../../components/MoreNews';
import Footer from '../../components/Footer';
import LocalNews from '../../services/localNews';

import Container from './styles';
import NoItems from '../../components/NoItems';

function App() {
  const [data] = useState(LocalNews.news);

  return (
    <Container>
      <Header />
      <div className="content">
        <section>
          {data?.map((item) => <NewsItem key={Math.random()} item={item} />)}
        </section>
      </div>
      {(!data || !data?.length) && <NoItems />}
      <MoreNews />
      <Footer />
    </Container>
  );
}

export default App;
