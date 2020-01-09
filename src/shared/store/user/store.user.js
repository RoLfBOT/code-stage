import { api, setToken } from "@/utils/api";

export default {
  namespaced: true,
  state: {
    user: null,
    token: "",
    isLoggedIn: false,
    loginError: null,
    registerError: null
  },

  getters: {
    AUTH_STATUS: state => {
      return state.isLoggedIn;
    },
    NAME: state => {
      return state.user ? state.user.name : "";
    },
    LOGIN_ERROR: state => {
      return state.loginError;
    },
    REGISTER_ERROR: state => {
      return state.registerError;
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
    "@SET_LOGIN_ERROR": (state, payload) => {
      state.loginError = payload;
    },
    "@SET_REGISTER_ERROR": (state, payload) => {
      state.registerError = payload;
    },
    "@LOGOUT": state => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
    }
  },

  actions: {
    Register: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/auth/register", payload);
        const { error } = data;
        const { user, token } = data.results;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        } else {
          commit("@SET_REGISTER_ERROR", error);
        }
      } catch (error) {
        commit("@SET_REGISTER_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    },
    Login: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/auth/login", payload);
        const { error } = data;
        const { user, token } = data.results;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        } else {
          commit("@SET_LOGIN_ERROR", error);
        }
      } catch (error) {
        commit("@SET_LOGIN_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    }
  }
};
