export function filterArr(moviesList, searchMovie) {
  const newMovieList = moviesList.filter((movie) => {
    return (
      movie.nameRU.toLowerCase().includes(searchMovie.toLowerCase()) ||
      movie.nameEN.toLowerCase().includes(searchMovie.toLowerCase())
    );
  });
  return newMovieList;
}

export function sortArray(arr) {
  arr.sort((a, b) => {
    const nameA = a.nameRU.trim().toLowerCase();
    const nameB = b.nameRU.trim().toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  return arr;
}
