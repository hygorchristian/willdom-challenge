import React from 'react';
import PropTypes from 'prop-types';

import Title from '../Title';
import Container from './styles';

function LocalItem({
  item, onUpdate, onDelete, ...props
}) {
  return (
    <Container {...props}>
      <div className="info">
        <Title>{item.title}</Title>
        <p className="description">{item.description}</p>
      </div>
      <div className="image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="overlay">
        <button onClick={onUpdate}>Edit</button>
        <button className="cancel" onClick={onDelete}>Delete</button>
      </div>
    </Container>
  );
}

LocalItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func,
  onDelete: PropTypes.func,
};

export default LocalItem;
