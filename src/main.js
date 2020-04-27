import Vue from 'vue'
import App from './App.vue'
import router from './router'

export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.filter('formatDate', function(date) {
  const moment = require('moment');
  return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
