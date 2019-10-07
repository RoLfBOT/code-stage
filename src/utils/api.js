import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api"
      : process.env.VUE_APP_API_URL
});

const SET = (api, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const api = API;
export const setToken = SET;
