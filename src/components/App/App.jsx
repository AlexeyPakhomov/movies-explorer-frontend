import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(true); // ручное переключение авторизации

  return (
    <div className="page">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route path="/saved-movies" element={<SavedMovies loggedIn={loggedIn} />} />
        <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
