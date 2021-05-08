import React, { useState } from 'react';

import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import MoreNews from '../../components/MoreNews';
import Footer from '../../components/Footer';
import LocalNews from '../../services/localNews';

import Container from './styles';
import NoItems from '../../components/NoItems';
import { slug } from '../../utils/slug';

function Local() {
  const [data] = useState(LocalNews.news);

  return (
    <Container data-testid="local-news">
      <Header />
      <div className="content">
        <section>
          {data?.map((item) => {
            const id = slug(item.title);
            return <NewsItem data-testid={id} key={id} item={item} />;
          })}
        </section>
      </div>
      {(!data || !data?.length) && <NoItems />}
      <MoreNews />
      <Footer />
    </Container>
  );
}

export default Local;
