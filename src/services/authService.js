import http from './httpService';
import jwtDecode from 'jwt-decode';

const apiEndpoint = '/auth';

const tokenKey = 'token';

async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}
http.setJwt(getJwt());

const auth = {
  login,
  loginWithJwt,
  getCurrentUser,
  logout,
  getJwt,
};

export default auth;
