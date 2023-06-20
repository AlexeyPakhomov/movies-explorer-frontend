import { useState, useCallback } from 'react';

export const useFormAndValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  const signInBtnValid =
    values.email === '' || values.password === '' || errors.email !== '' || errors.password !== '';

  const signUpBtnValid =
    values.name === '' ||
    values.email === '' ||
    values.password === '' ||
    errors.name !== '' ||
    errors.email !== '' ||
    errors.password !== '';

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    setValues,
    setIsValid,
    signInBtnValid,
    signUpBtnValid,
  };
};
