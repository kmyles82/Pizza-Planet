import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'
import Vuetify from 'vuetify/lib'
import Accounting from 'accounting-js'



Vue.filter('currency',(val) => {
  return Accounting.formatMoney(val)
});

Vue.component('global-components', {
  template: '<div>A global component</div>'
})

Vue.use(Vuetify);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
