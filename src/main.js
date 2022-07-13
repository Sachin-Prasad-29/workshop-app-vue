import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";

// path is wrt node_modules
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(Router);

new Vue({
  render: (h) => h(App),
  // router:router
  router,
}).$mount("#app");
