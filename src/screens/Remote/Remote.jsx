import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useQuery } from 'react-query';

import Header from '../../components/Header';
import NewsItem from '../../components/NewsItem';
import MoreNews from '../../components/MoreNews';
import Footer from '../../components/Footer';

import Container from './styles';
import NoItems from '../../components/NoItems';

function Remote() {
  const { data } = useQuery('remote');

  return (
    <Container>
      <Header />
      <InfiniteScroll
        dataLength={2}
        hasMore={false}
        next={() => null}
      >
        <div className="content">
          <section>
            {data?.map((item) => <NewsItem key={Math.random()} item={item} />)}
          </section>
        </div>
      </InfiniteScroll>
      {(!data || !data?.length) && <NoItems />}
      <MoreNews />
      <Footer />
    </Container>
  );
}

export default Remote;
