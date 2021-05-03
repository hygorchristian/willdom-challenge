import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Container from './styles';

function Title({ children }) {
  const [initial, setInitial] = useState('');
  const [rest, setRest] = useState('');

  useEffect(() => {
    if (children && typeof children === 'string') {
      const words = children.split(' ');
      const firstWords = words.slice(0, 2).join(' ');
      const srest = words.slice(2, children.length - 2).join(' ');
      setInitial(`${firstWords} `);
      setRest(srest);
    }
  }, []);

  return (
    <Container>
      <span className="initial">{initial}</span>
      <span className="rest">{rest}</span>
    </Container>
  );
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Title;
