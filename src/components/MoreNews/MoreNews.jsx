import React from 'react';

import Container from './styles';
import data from './data';

function MoreNews() {
  return (
    <Container data-testid="more-news">
      <section>
        <h2 className="title">Last week’s stories</h2>
        <div className="grid">
          {data.map((item) => (
            <div key={item.id} className="item">
              <img src={item.image} alt="thumbnail" />
              <h4 className="title">{item.title}</h4>
              <div className="author">
                <span className="by">by&nbsp;</span>
                <span className="author-name">{item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}

export default MoreNews;
