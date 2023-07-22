import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import Vuelidate from 'vuelidate';
import router from './router';
import AppSpinner from './components/utils/AppSpinner';
import AppAlert from './components/utils/AppAlert';
import { formatDate } from './filters/formatDate';
import VueToast from 'vue-toast-notification';

// path is wrt node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Vuelidate);
Vue.use(VueToast);
Vue.filter('formatDate', formatDate);
Vue.component('AppSpinner', AppSpinner);
Vue.component('AppAlert', AppAlert);

new Vue({
  render: (h) => h(App),
  // router: router
  router,
}).$mount('#app');
