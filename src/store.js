import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import editorData from "./shared/store/editor/store.editor";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    editor: editorData
  }
});
