import http from './httpService';

const apiEndpoint = apiUrl + '/movies';

function movieUrl(id) {
  return `/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}
export function saveMovie(movie) {
  if (movie._id) {
    // Spread the movie object and remove the id
    // bc there is an id in the url, and the body.
    // So remove the id from movie and leave the
    // rest of the data in the body.
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(movieUrl(movieId));
}
