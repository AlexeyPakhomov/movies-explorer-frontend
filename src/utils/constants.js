export const MAIN_URL = 'https://api.pakhomov.nomoredomains.rocks';
export const BEATFILM_URL = 'https://api.nomoreparties.co';

export const PATTERN_EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/i;
export const PATTERN_NAME = /^[a-zA-Zа-яА-ЯёЁ\s-]{2,30}$/i;

export const INVALID_NAME_ERR =
  'Поле name может содержать только латиницу, кириллицу, пробел или дефис. Длина от 2 до 30 символов.';
export const INVALID_EMAIL_ERR = 'Указан неверный email';
export const EMPTY_INPUT_ERR = 'Поле обязательно к заполнению';
export const NOT_FOUND_MOVIE = 'Ничего не найдено';
export const ERROR_SEARCH_MOVIE =
  'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';
export const AUTHORIZATION_DATA_ERR = 'Вы ввели неправильный логин или пароль';
export const NOT_FOUND_TOKEN_ERR =
  'При авторизации произошла ошибка. Токен не передан или передан не в том формате';
export const DUPLICATE_USER_ERR = 'Пользователь с таким email уже существует.';
export const BAD_REQUEST_ERR = 'При регистрации пользователя произошла ошибка';
export const BAD_REQUEST_PROFILE_ERR = 'При обновлении профиля произошла ошибка';
export const SERVER_ERR = 'На сервере произошла ошибка';
export const DATA_UPDATE = 'Данные обновлены';

export const SHORT_MOVIE = 40;

export const SCREEN_1280 = 1280;
export const SCREEN_1280_SHOW_MOVIES = 12;
export const SCREEN_1280_ADD_MOVIES = 3;

export const SCREEN_768 = 768;
export const SCREEN_768_SHOW_MOVIES = 8;
export const SCREEN_768_ADD_MOVIES = 2;

export const SCREEN_767MAX_SHOW_MOVIES = 5;
export const SCREEN_767MAX_ADD_MOVIES = 2;
