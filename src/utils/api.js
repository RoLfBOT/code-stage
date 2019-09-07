import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api"
});

const SET = (api, token) => {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const api = API;
export const setToken = SET;
