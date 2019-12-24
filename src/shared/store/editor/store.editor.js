export default {
  namespaced: true,
  state: {
    source: "",
    mode: "c_cpp",
    theme: "monokai",
    fontSize: 16,
    tabs: 4
  },

  getters: {
    SOURCE: state => {
      return state.source;
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
    }
  },
  actions: {
    Reset: async ({ commit }) => {
      commit("@RESET");
      commit("plg/@RESET", null, { root: true });
    }
  }
};
