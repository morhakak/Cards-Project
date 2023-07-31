import { useState, useCallback, useMemo, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import {
  getUser,
  removeToken,
  setTokeninLocalStorge,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routeModel";
import { login, signup } from "../services/userApiService.js";
import normalizeUser from "../helpers/normalization/normalizeUser";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredUser, setFilter] = useState(null);

  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user = null) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokeninLocalStorge(token);
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
  }, [setUser]);

  const handleSignup = useCallback(
    async (userFromTheClient) => {
      try {
        const normalizeUser = normalizeUser(userFromTheClient);
        await signup(normalizeUser);
        await handleLogin({
          email: userFromTheClient.email,
          password: userFromTheClient.password,
        });
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [normalizeUser, handleLogin, requestStatus]
  );

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;
