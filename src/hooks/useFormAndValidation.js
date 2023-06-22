import { useEffect } from 'react';
import { useState, useCallback } from 'react';
import {
  PATTERN_EMAIL,
  INVALID_EMAIL_ERR,
  PATTERN_NAME,
  INVALID_NAME_ERR,
  EMPTY_INPUT_ERR,
} from '../utils/constants';

export const useFormAndValidation = (userData) => {
  const [values, setValues] = useState(userData);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (
      nameError ||
      emailError ||
      passwordError ||
      values.name === '' ||
      values.email === '' ||
      values.password === ''
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [values, nameError, emailError, passwordError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === undefined) {
      setNameError('');
      setEmailError('');
      setPasswordError('');
    } else {
      if (name === 'name') {
        if (!PATTERN_NAME.test(value) || value.length === 1 || value.length > 30) {
          setNameError(INVALID_NAME_ERR);
        } else {
          setNameError('');
        }
      }
      if (name === 'email') {
        if (!PATTERN_EMAIL.test(value)) {
          setEmailError(INVALID_EMAIL_ERR);
        } else {
          setEmailError('');
        }
      }
      if (name === 'password') {
        if (value.length === 0) {
          setPasswordError(EMPTY_INPUT_ERR);
        } else {
          setPasswordError('');
        }
      }
    }
  };

  const resetForm = useCallback(
    (newValues = {}, newIsValid = false) => {
      setValues(newValues);
      setIsValid(newIsValid);
    },
    [setValues, setIsValid],
  );

  return {
    values,
    setValues,
    nameError,
    emailError,
    passwordError,
    isValid,
    setIsValid,
    handleChange,
    resetForm,
  };
};
