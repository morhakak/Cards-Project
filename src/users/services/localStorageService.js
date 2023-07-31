import jwtDecode from "jwt-decode";
const TOKEN = "token";

export const setTokeninLocalStorge = (encryptedToken) => {
  localStorage.setItem(TOKEN, encryptedToken);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN);
};

export const getUser = () => {
  try {
    const myToken = localStorage.getItem(TOKEN);
    return jwtDecode(myToken);
  } catch (error) {
    return null;
  }
};
