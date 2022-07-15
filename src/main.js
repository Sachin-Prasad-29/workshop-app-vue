import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import AppSpinner from "./components/utils/AppSpinner";
import AlertBox from "./components/utils/AlertBox";
import { formatDate } from "./filters/formatDate";

// path is wrt node_modules
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.component("AlertBox", AlertBox);
Vue.use(Router);
Vue.filter("formatDate", formatDate);
Vue.component("AppSpinner", AppSpinner);

new Vue({
  render: (h) => h(App),
  // router:router
  router,
}).$mount("#app");
