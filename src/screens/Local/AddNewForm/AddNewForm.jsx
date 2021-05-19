import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

import Input from '../../../components/Input';
import ImagePicker from '../../../components/ImagePicker';
import useFormikCustom from '../../../hooks/useFormikCustom';

import { Container } from './styles';
import { LocalNewsActions } from '../../../store/ducks/localNews';

function AddNewForm({ onClose, article }) {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    if (article) {
      const data = { id: article.id, ...values };
      dispatch(LocalNewsActions.localNewsUpdate(data));
    } else {
      const data = { id: Date.now(), ...values };
      dispatch(LocalNewsActions.localNewsAdd(data));
    }

    resetForm();
    onClose();
  };

  const formik = useFormikCustom({
    onSubmit,
    initialValues: {
      title: '',
      description: '',
      image: '',
    },
    validationSchema: Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      image: Yup.string().required(),
    }),
  });

  useEffect(() => {
    if (article) {
      formik.setFieldValue('title', article.title);
      formik.setFieldValue('description', article.description);
      formik.setFieldValue('image', article.image);
    }
  }, [article]);

  return (
    <Container>
      <h2>{article ? 'Update Article' : 'Add Article'}</h2>
      <form>
        <Input label="Title" {...formik.inputProps('title')} />
        <Input multiline rows={5} label="Description" {...formik.inputProps('description')} />
        <ImagePicker
          label="Image"
          value={formik.values.image}
          error={formik.errors.image}
          onChange={(image) => formik.setFieldValue('image', image)}
        />
      </form>
      <div className="control">
        <button onClick={onClose} className="cancel">Cancel</button>
        <button onClick={formik.submitForm}>{ article ? 'Update' : 'Create' }</button>
      </div>
    </Container>
  );
}

AddNewForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default AddNewForm;
