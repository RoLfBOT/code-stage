import { api } from "@/utils/api";
import base64 from "base-64";

export default {
  namespaced: true,
  state: {
    source: "",
    stdin: "",
    output: "",
    mode: "c_cpp",
    theme: "monokai",
    fontSize: 16,
    tabs: 4,
    runCodeError: undefined
  },

  getters: {
    SOURCE: state => {
      return state.source;
    },
    STDIN: state => {
      return state.stdin;
    },
    OUTPUT: state => {
      return state.output;
    },
    MODE: state => {
      return state.mode;
    },
    THEME: state => {
      return state.theme;
    },
    FONTSIZE: state => {
      return state.fontSize;
    },
    TABS: state => {
      return state.tabs;
    }
  },

  mutations: {
    "@SET_SOURCE": (state, payload) => {
      state.source = payload;
    },
    "@SET_STDIN": (state, payload) => {
      state.stdin = payload;
    },
    "@SET_OUTPUT": (state, payload) => {
      state.output = payload;
    },
    "@SET_MODE": (state, payload) => {
      state.mode = payload;
    },
    "@SET_THEME": (state, payload) => {
      state.theme = payload;
    },
    "@SET_FONTSIZE": (state, payload) => {
      state.fontSize = parseInt(payload);
    },
    "@SET_TABS": (state, payload) => {
      state.tabs = parseInt(payload);
    },
    "@RESET": state => {
      state.source = "";
      state.stdin = "";
      state.output = "";
    },
    "@SET_RUN_ERROR": (state, payload) => {
      state.runCodeError = payload;
    }
  },
  actions: {
    RunCode: async ({ state, commit }) => {
      const program = {
        source: base64.encode(state.source),
        stdin: state.stdin,
        language: state.mode
      };

      try {
        let { data } = await api.post("/plg/run", program);
        const { error } = data;
        const { output, statusCode } = data.results;
        if (!error.error) {
          statusCode === 200
            ? commit("@SET_OUTPUT", output)
            : commit("@SET_OUTPUT", data.results.error);
          commit("@SET_RUN_ERROR", error);
        }
      } catch (err) {
        commit("@SET_RUN_ERROR", {
          error: true,
          message: err.message
        });
      }
    },
    Reset: async ({ commit }) => {
      commit("@RESET");
      commit("plg/@RESET", null, { root: true });
    }
  }
};
