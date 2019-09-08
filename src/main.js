import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueClipboard from "vue-clipboard2";
import Vuelidate from "vuelidate";
import "./registerServiceWorker";

import "./assets/sass/app.scss";

Vue.config.productionTip = false;
Vue.use(VueClipboard);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
