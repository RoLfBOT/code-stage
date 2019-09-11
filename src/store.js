import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import editorData from "./shared/store/editor/store.editor";
import user from "./shared/store/user/store.user";
import plg from "./pages/Playground/store/store.playground";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    editor: editorData,
    user: user,
    plg: plg
  }
});
