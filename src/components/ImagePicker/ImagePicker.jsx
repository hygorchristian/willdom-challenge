import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdError } from 'react-icons/md';
import { useDropzone } from 'react-dropzone';

import { toBase64 } from '../../utils/file';
import { Container } from './styles';

function ImagePicker({
  label, error, value, onChange,
}) {
  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles?.[0];
    if (file) {
      const base64 = await toBase64(acceptedFiles[0]);
      onChange(base64);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleClose = (e) => {
    e.preventDefault();
    onChange('');
  };

  return (
    <Container>
      <label>{label}</label>
      {value ? (
        <div className="image-container">
          <div className="overlay">
            <button onClick={handleClose}>
              <MdClose size={20} color="white" />
            </button>
          </div>
          <img src={value} alt="img" />
        </div>
      ) : (
        <div className={`input-container ${error ? 'error' : ''}`} {...getRootProps()}>
          <input {...getInputProps()} />
          {
            isDragActive
              ? <p>Drop the files here ...</p>
              : <p>Drag and drop some files here, or click to select files</p>
          }
        </div>
      )}
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

ImagePicker.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

ImagePicker.defaultProps = {
  label: '',
  error: null,
  value: '',
  onChange: () => null,
};

export default ImagePicker;
