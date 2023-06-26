import { BEATFILM_URL } from './constants';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getMovies = () => {
  return fetch(`${BEATFILM_URL}/beatfilm-movies`, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};
