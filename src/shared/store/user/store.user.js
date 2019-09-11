import { api, setToken } from "@/utils/api";

export default {
  namespaced: true,
  state: {
    user: null,
    token: "",
    isLoggedIn: false,
    error: null
  },

  getters: {
    AUTHSTATUS: state => {
      return state.isLoggedIn;
    },
    NAME: state => {
      return state.user ? state.user.name : "";
    },
    ERROR: state => {
      return state.error;
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
    "@SET_ERROR": (state, payload) => {
      state.error = payload;
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
        const { error } = data;
        const { user, token } = data.results;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        } else {
          commit("@SET_ERROR", error);
        }
      } catch (error) {
        commit("@SET_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    },
    LOGIN: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/auth/login", payload);
        const { error } = data;
        const { user, token } = data.results;
        if (!error.error) {
          commit("@SET_TOKEN", token);
          commit("@SET_USER", user);
        } else {
          commit("@SET_ERROR", error);
        }
      } catch (error) {
        commit("@SET_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    }
  }
};
