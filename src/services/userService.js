import http from './httpService';

const apiEndpoint = '/users';

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

export function addFavorite(movie) {
  return http.post(apiEndpoint, { favorites: JSON.stringify(movie._id) });
}


