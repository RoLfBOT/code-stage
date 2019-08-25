export default {
  namespaced: true,
  state: {
    mode: "c_cpp",
    theme: "monokai",
    fontSize: 16,
    tabs: 2
  },

  getters: {
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
    }
  }
};
