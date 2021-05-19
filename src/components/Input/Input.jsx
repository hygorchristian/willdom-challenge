import React, { useState } from 'react';
import { MdError } from 'react-icons/md';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Input({
  label, error, multiline, ...props
}) {
  const [focus, setFocus] = useState('');

  const onFocus = () => setFocus('focus');

  const onBlur = () => setFocus('');

  return (
    <Container>
      <label>{label}</label>
      <div className={`input-container ${focus} ${error ? 'error' : ''}`}>
        {multiline ? (
          <textarea {...{ onBlur, onFocus, ...props }} />
        ) : (
          <input {...{ onBlur, onFocus, ...props }} />
        )}
      </div>
      {error
      && (
        <div className="error-container">
          <MdError color="brown" size={20} />
          <span className="error">{error}</span>
        </div>
      )}
    </Container>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  multiline: PropTypes.bool,
};

Input.defaultProps = {
  label: '',
  error: null,
  multiline: false,
};

export default Input;
