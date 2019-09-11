import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { sync } from "vuex-router-sync";
import VueClipboard from "vue-clipboard2";
import Vuelidate from "vuelidate";
import "./registerServiceWorker";

import "./assets/sass/app.scss";

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(Vuelidate);

sync(store, router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
