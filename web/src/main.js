import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as api from "./common/api";
import * as utils from "./common/utils";
// import "amfe-flexible";
import "lib-flexible";

import Vant from "vant";
import "vant/lib/index.css";
import "./assets/style/reset.less";

Vue.use(Vant);

Vue.prototype.$api = api;
Vue.prototype.$utils = utils;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
