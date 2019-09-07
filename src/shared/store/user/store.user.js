import { api, setToken } from "@/utils/api";

export default {
  namespaced: true,
  state: {
    user: null,
    token: "",
    isLoggedIn: false,
    error: false
  },

  getters: {
    AUTHSTATUS: state => {
      return state.isLoggedIn;
    },
    NAME: state => {
      return state.user ? state.user.name : "";
    }
  },

  mutations: {
    "@SET_USER": (state, user) => {
      state.user = user;
    },
    "@SET_TOKEN": (state, token) => {
      state.token = token;
      state.isLoggedIn = true;
      setToken(api, state.token);
    },
    "@LOGOUT": state => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    }
  },

  actions: {
    REGISTER: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/auth/register", payload);
        const user = data.data.user;
        const token = data.data.token;
        const error = data.error;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        }
      } catch (err) {
        console.log("Error Occurred. Please try again");
      }
    },
    LOGIN: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/auth/login", payload);
        const user = data.data.user;
        const token = data.data.token;
        const error = data.error;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        } else {
          throw new Error("Internal Server Error");
        }
      } catch (error) {
        throw new Error("Login Failed");
      }
    }
  }
};
