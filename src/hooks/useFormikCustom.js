import { useFormik } from 'formik';

function useFormikCustom(params) {
  const formik = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    ...params,
  });
  formik.inputProps = (name) => ({
    value: formik.values[name],
    onChange: (e) => formik.setFieldValue(name, e.target.value),
    error: formik.errors[name],
  });

  return formik;
}

export default useFormikCustom;
