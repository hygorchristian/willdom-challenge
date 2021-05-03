import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Container from './styles';

function NewsItem({ item, ...props }) {
  return (
    <Container {...props}>
      <div className="info">
        <Title>{item.title}</Title>
        <p className="description">{item.description}</p>
      </div>
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
    </Container>
  );
}

NewsItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default NewsItem;
