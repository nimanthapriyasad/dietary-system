import { TOKEN_KEY, USER_DETAILS } from "../constants/index.jsx";

export function setAuthorizationKey(token) {
  const key = `Bearer ${token}`;
  localStorage.setItem(TOKEN_KEY, key);
}

export function setUserObjectInLocal(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem(USER_DETAILS, userString);
}
