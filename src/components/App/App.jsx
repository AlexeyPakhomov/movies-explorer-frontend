import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import * as mainApi from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { showErr } from '../../utils/showErr';
import { sortArray, filterArr } from '../../utils/filterAndSortArray';
import {
  SHORT_MOVIE,
  DUPLICATE_USER_ERR,
  BAD_REQUEST_ERR,
  AUTHORIZATION_DATA_ERR,
  NOT_FOUND_TOKEN_ERR,
  BAD_REQUEST_PROFILE_ERR,
  SERVER_ERR,
} from '../../utils/constants';

import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSwitch, setIsSwitch] = useState(false);
  const [isSwitchSaved, setIsSwitchSaved] = useState(false);
  //const [searchMovie, setSearchMovie] = useState('');

  const [error, setError] = useState(false);
  const [textError, setTextError] = useState('');
  const [notFoundMovies, setNotFoundMovies] = useState(false);
  const [profileUpdated, setProfileUpdated] = useState(false);

  useEffect(() => {
    setNotFoundMovies(false);
    setError(false);
  }, [location]);

  //---------- Проверка токена ----------
  function handleTokenCheck() {
    const jwtToken = localStorage.getItem('jwt');
    if (!jwtToken) {
      return;
    }
    mainApi
      .validityToken(jwtToken)
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        if (location.pathname === '/signup' || location.pathname === '/signin') {
          navigate('/movies', { replace: true });
        } else {
          navigate(location.pathname, { replace: true });
        }
        //console.log('handleTokenCheck, токен проверен', res);
      })
      .catch((err) => console.log(`Ошибка валидации токена: ${err}`));
  }

  useEffect(() => {
    handleTokenCheck();
  }, []);

  //---------- Получаем сохраненные фильмы ----------
  useEffect(() => {
    if (loggedIn) {
      localStorage.removeItem('filteredSavedMovies');
      setIsSwitchSaved(false);
      mainApi
        .getUserMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
          //console.log('Получаем данные savedMovies', savedMovies);
        })
        .catch((err) => console.log(`Ошибка получения данных savedMovies: ${err}`));
    } else {
      setSavedMovies([]);
    }
  }, [loggedIn, location]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('filteredMovies'));
    if (movies) {
      setMovies(movies);
    }
  }, [loggedIn]);

  //---------- Регистрация пользователя ----------
  function handleSignUp({ name, email, password }) {
    setIsLoading(true);
    mainApi
      .signUp({ name, email, password })
      .then((data) => {
        setCurrentUser(data);
        handleSignIn({ email, password });
        //console.log('Пользователь зарегистрирован', data);
      })
      .catch((err) => {
        setError(true);
        showErr(err, 409, setTextError, DUPLICATE_USER_ERR);
        showErr(err, 400, setTextError, BAD_REQUEST_ERR);
        console.log(`Ошибка регистрации: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  //---------- Авторизация пользователя ----------
  function handleSignIn({ email, password }) {
    setIsLoading(true);
    mainApi
      .signIn({ email, password })
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        handleTokenCheck();
        //console.log('handleAuthorization, токен', data);
      })
      .catch((err) => {
        setError(true);
        showErr(err, 401, setTextError, AUTHORIZATION_DATA_ERR);
        showErr(err, 400, setTextError, NOT_FOUND_TOKEN_ERR);
        console.log(`Ошибка авторизации: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  //---------- Обновление данных пользователя ----------
  function handleUpdateUser({ name, email }) {
    setIsLoading(true);
    mainApi
      .editProfile({ name, email })
      .then((currentUserData) => {
        setCurrentUser(currentUserData);
        setProfileUpdated(true);
        setTimeout(() => setProfileUpdated(false), 5000);
        //console.log('Обновлены данные юзера', currentUserData);
      })
      .catch((err) => {
        setError(true);
        showErr(err, 409, setTextError, DUPLICATE_USER_ERR);
        showErr(err, 400, setTextError, BAD_REQUEST_PROFILE_ERR);
        showErr(err, 500, setTextError, SERVER_ERR);
        console.log(`Ошибка редактирования попап профиля: ${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //---------- Выборка фильмов при включенном чекбоксе ----------
  function filterSwitchMovies(movies) {
    return movies.filter((movie) => movie.duration < SHORT_MOVIE);
  }

  //---------- Отслеживаем состояние чекбокса на каждой стр. ----------
  function handleChangeSwitch() {
    !isSwitch ? setIsSwitch(true) : setIsSwitch(false);
  }

  function handleChangeSwitchSaved() {
    !isSwitchSaved ? setIsSwitchSaved(true) : setIsSwitchSaved(false);
  }

  //---------- Фильтрация по чекбоксу на movies ----------
  function handleSwitchMovie() {
    if (loggedIn) {
      localStorage.setItem('switch', isSwitch);
      const moviesSwitch = JSON.parse(localStorage.getItem('filteredMovies'));
      if (moviesSwitch) {
        if (isSwitch) {
          const switchResult = filterSwitchMovies(moviesSwitch);
          if (switchResult.length === 0) {
            setMovies([]);
            setNotFoundMovies(true);
          } else {
            setMovies(switchResult);
            setNotFoundMovies(false);
          }
        } else {
          setMovies(moviesSwitch);
          setNotFoundMovies(false);
        }
      }
    }
  }

  useEffect(() => {
    handleSwitchMovie();
  }, [isSwitch]);

  //---------- Фильтрация по чекбоксу на saved-movies ----------
  function handleSwitchSavedMovie() {
    //localStorage.setItem('switchSavedMovies', isSwitchSaved);
    //const moviesSaved = JSON.parse(localStorage.getItem('savedMovies'));
    const moviesSavedSwitch = JSON.parse(localStorage.getItem('filteredSavedMovies'));
    if (moviesSavedSwitch) {
      if (isSwitchSaved) {
        const switchSavedResult = filterSwitchMovies(moviesSavedSwitch);
        if (switchSavedResult.length === 0) {
          setSavedMovies([]);
          setNotFoundMovies(true);
        } else {
          setSavedMovies(switchSavedResult);
          setNotFoundMovies(false);
        }
      } else {
        setSavedMovies(moviesSavedSwitch);
        setNotFoundMovies(false);
      }
    }
  }

  useEffect(() => {
    handleSwitchSavedMovie();
  }, [isSwitchSaved]);

  //Загрузка фильмов с beatfilm с последующей фильтрацией фильмов или показ ошибок
  function handleSearchMovie(searchMovie) {
    const moviesList = JSON.parse(localStorage.getItem('movies'));
    const moviesKey = filterArr(moviesList, searchMovie);
    sortArray(moviesKey);
    if (moviesKey.length === 0) {
      setNotFoundMovies(true);
    } else {
      localStorage.setItem('filteredMovies', JSON.stringify(moviesKey));
      handleSwitchMovie();
    }
  }

  function getMoviesBeatfilm(searchMovie) {
    setIsLoading(true);
    localStorage.setItem('searchMovie', searchMovie);
    getMovies()
      .then((beatfilmMovies) => {
        localStorage.setItem('movies', JSON.stringify(beatfilmMovies));
        handleSearchMovie(searchMovie);
      })
      .catch((err) => {
        setError(true);
        console.log(`Ошибка загрузки фильмов с beatfilms: ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  //Загрузка фильмов на saved-movies с последующей фильтрацией фильмов или показ ошибок
  function getMoviesSaved(searchMovie) {
    const moviesSavedList = JSON.parse(localStorage.getItem('savedMovies'));
    const moviesSavedKey = filterArr(moviesSavedList, searchMovie);
    sortArray(moviesSavedKey);

    if (moviesSavedKey.length === 0) {
      setSavedMovies([]);
      setNotFoundMovies(true);
      localStorage.removeItem('filteredSavedMovies');
    } else {
      localStorage.setItem('filteredSavedMovies', JSON.stringify(moviesSavedKey));
      handleSwitchSavedMovie();
    }
  }

  //---------- Проверка иконки сохранения ----------
  function saveMovieIcon(movie) {
    if (savedMovies) {
      return savedMovies.some((m) => m.movieId === movie.id);
    }
  }

  //---------- Cохранение/удаление фильма на movies ----------
  function handleSaveMovie(movie) {
    const movieSelected = savedMovies.find((m) => m.movieId === movie.id);

    if (movieSelected) {
      mainApi
        .deleteMovie(movieSelected._id)
        .then((movie) => {
          const updatedSavedMovies = savedMovies.filter((m) => m._id !== movie._id);
          setSavedMovies(updatedSavedMovies);
          localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        })
        .catch((err) => {
          console.log(`Ошибка удаления фильма: ${err}`);
        });
    } else {
      mainApi
        .saveMovie(movie)
        .then((data) => {
          const arrSaveMovies = [...savedMovies];
          arrSaveMovies.push(data);
          setSavedMovies(arrSaveMovies);
          localStorage.setItem('savedMovies', JSON.stringify(arrSaveMovies));
        })
        .catch((err) => {
          console.log(`Ошибка сохранения фильма: ${err}`);
        });
    }
  }

  //---------- Удаление сохраненного фильма на saved-movies ----------
  function handleDeleteSavedMovie(movie) {
    mainApi
      .deleteMovie(movie._id)
      .then((movie) => {
        const updatedSavedMovies = savedMovies.filter((m) => m._id !== movie._id);
        setSavedMovies(updatedSavedMovies);
        localStorage.setItem('savedMovies', JSON.stringify(updatedSavedMovies));
        localStorage.setItem('filteredSavedMovies', JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => {
        console.log(`Ошибка удаления фильма: ${err}`);
      });
  }

  //---------- Выход из аккаунта ----------
  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser({});
    setMovies([]);
    setSavedMovies([]);
    localStorage.clear();
    setError(false);
    navigate('/', { replace: true });
    //console.log('Пользователь вышел', currentUser);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <>
            <Route
              exact
              path="/"
              element={<Main loggedIn={loggedIn} />}
            />
            <Route
              path="/signin"
              element={
                <Login
                  onSignIn={handleSignIn}
                  error={error}
                  setError={setError}
                  textError={textError}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  onSignUp={handleSignUp}
                  error={error}
                  setError={setError}
                  textError={textError}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  movies={movies}
                  getMoviesData={getMoviesBeatfilm}
                  onSave={handleSaveMovie}
                  saveMovieIcon={saveMovieIcon}
                  deleteMovie={handleDeleteSavedMovie}
                  notFoundMovies={notFoundMovies}
                  error={error}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  changeSwitch={handleChangeSwitch}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  savedMovies={savedMovies}
                  getMoviesData={getMoviesSaved}
                  saveMovieIcon={saveMovieIcon}
                  deleteMovie={handleDeleteSavedMovie}
                  notFoundMovies={notFoundMovies}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  changeSwitch={handleChangeSwitchSaved}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  onLogOut={handleSignOut}
                  error={error}
                  setError={setError}
                  textError={textError}
                  profileUpdated={profileUpdated}
                  isLoading={isLoading}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="*"
              element={<PageNotFound />}
            />
          </>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
