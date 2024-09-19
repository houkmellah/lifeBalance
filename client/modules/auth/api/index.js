import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Intercepteur pour ajouter le token à chaque requête
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const register = (name, email, password) => {
  return api.post("/register", { email, password, name });
};

export const login = (email, password) => {
  return api.post("/login", { email, password });
};

export const getProtectedData = () => {
  return api.get("/protected");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const forgotPassword = async (email) => {
  return await api.post("/forgot-password", { email });
};

export default api;
