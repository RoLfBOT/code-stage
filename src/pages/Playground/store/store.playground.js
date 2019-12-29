import { api } from "@/utils/api";
import base64 from "base-64";

export default {
  namespaced: true,
  state: {
    codeId: "",
    title: "Untitled",
    error: null,
    savedList: null,
    deleteError: undefined
  },
  mutations: {
    "@SET_CODEID": (state, payload) => {
      state.codeId = payload;
    },
    "@SET_TITLE": (state, payload) => {
      state.title = payload;
    },
    "@SET_ERROR": (state, payload) => {
      state.error = payload;
    },
    "@SET_DELETE_ERROR": (state, payload) => {
      state.deleteError = payload;
    },
    "@SET_SAVEDLIST": (state, payload) => {
      state.savedList = payload;
    },
    "@DELETE_CODE": (state, payload) => {
      state.savedList.splice(payload, 1);
    },
    "@RESET": state => {
      state.codeId = "";
      state.title = "Untitled";
      state.output = "";
      state.stdin = "";
    }
  },
  getters: {
    ID: state => {
      return state.codeId;
    },
    TITLE: state => {
      return state.title;
    }
  },
  actions: {
    SaveToServer: async ({ state, commit, rootGetters }) => {
      let payload = {
        codeId: state.codeId,
        title: state.title,
        language: rootGetters["editor/MODE"],
        source: base64.encode(rootGetters["editor/SOURCE"])
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
          commit("@SET_ERROR", error);
          commit("editor/@SET_MODE", code.language, { root: true });
          commit("editor/@SET_SOURCE", base64.decode(code.source), {
            root: true
          });
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
    },
    DeleteCode: async ({ commit }, payload) => {
      const codeId = payload.codeId;

      try {
        let { data } = await api.delete(`/plg/delete/${codeId}`);
        const { error } = data;
        commit("@SET_DELETE_ERROR", error);
        if (!error.error) {
          commit("@DELETE_CODE", payload.index);
        }
      } catch (err) {
        commit("@SET_DELETE_ERROR", {
          error: true,
          message: err.message
        });
      }
    }
  }
};
