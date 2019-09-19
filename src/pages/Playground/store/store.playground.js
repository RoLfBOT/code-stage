import { api } from "@/utils/api";
import base64 from "base-64";

export default {
  namespaced: true,
  state: {
    codeId: "",
    title: "Untitled",
    source: "",
    error: null,
    savedList: null
  },
  mutations: {
    "@SET_CODEID": (state, payload) => {
      state.codeId = payload;
    },
    "@SET_TITLE": (state, payload) => {
      state.title = payload;
    },
    "@SET_SOURCE": (state, payload) => {
      state.source = payload;
    },
    "@SET_ERROR": (state, payload) => {
      state.error = payload;
    },
    "@SET_SAVEDLIST": (state, payload) => {
      state.savedList = payload;
    },
    "@RESET": state => {
      state.codeId = "";
      state.title = "Untitled";
      state.source = "";
    }
  },
  getters: {
    ID: state => {
      return state.codeId;
    },
    TITLE: state => {
      return state.title;
    },
    SOURCE: state => {
      return state.source;
    }
  },
  actions: {
    SaveToServer: async ({ state, commit, rootGetters }) => {
      let payload = {
        codeId: state.codeId,
        title: state.title,
        language: rootGetters["editor/MODE"],
        source: base64.encode(state.source)
      };

      try {
        let { data } = await api.post("/plg/save", payload);
        const { error } = data;
        const { code } = data.results;

        if (!error.error) {
          commit("@SET_CODEID", code.codeId);
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
    },
    LoadFromServer: async ({ rootState, commit }) => {
      const codeId = rootState.route.params.id;

      try {
        let { data } = await api.get(`/plg/get/${codeId}`);
        const { error } = data;
        const { code } = data.results;
        if (!error.error) {
          commit("@SET_CODEID", code.codeId);
          commit("@SET_TITLE", code.title);
          commit("@SET_SOURCE", base64.decode(code.source));
          commit("@SET_ERROR", error);
          commit("editor/@SET_MODE", code.language, { root: true });
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
    GetAllFromServer: async ({ commit }) => {
      try {
        let { data } = await api.get("/plg/all");
        const { error } = data;
        const { codeList } = data.results;
        if (!error.error) {
          commit("@SET_SAVEDLIST", codeList);
          commit("@SET_ERROR", error);
        }
        commit("@SET_ERROR", error);
      } catch (err) {
        commit("@SET_ERROR", {
          error: true,
          message: "Oops. Something went wrong. Please try again!"
        });
      }
    }
  }
};
