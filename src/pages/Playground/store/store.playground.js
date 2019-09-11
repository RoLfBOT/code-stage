import { api } from "@/utils/api";
import base64 from "base-64";

export default {
  namespaced: true,
  state: {
    title: "",
    source: "",
    error: null
  },
  mutations: {
    "@SET_TITLE": (state, payload) => {
      state.title = payload;
    },
    "@SET_SOURCE": (state, payload) => {
      state.source = payload;
    },
    "@SET_ERROR": (state, payload) => {
      state.error = payload;
    },
    "@RESET": state => {
      state.title = "Untitled";
      state.source = "";
    }
  },
  actions: {
    SaveToServer: async ({ commit }, payload) => {
      try {
        let { data } = await api.post("/plg/save", payload);
        const { error } = data;
        const { code } = data.results;
        if (!error.error) {
          commit("@SET_TITLE", code.title);
          commit("@SET_SOURCE", base64.decode(code.source));
          commit("editor/@SET_MODE", code.language);
        } else {
          commit("@SET_ERROR", error);
        }
      } catch (err) {
        commit("@SET_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    },
    LoadFromServer: async ({ rootState, commit }) => {
      if (rootState.route.name !== "saved") {
        return;
      }
      const codeId = rootState.route.params.id;
      try {
        let { data } = await api.get(`/plg/get/${codeId}`);
        const { error } = data;
        const { code } = data.results;
        if (!error.error) {
          commit("@SET_TITLE", code.title);
          commit("@SET_SOURCE", base64.decode(code.source));
          commit("editor/@SET_MODE", code.title);
          commit("@SET_ERROR", error);
        } else {
          commit("@SET_ERROR", error);
        }
      } catch (err) {
        commit("@SET_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    }
  }
};
