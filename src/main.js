import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.config.productionTip = false

Vue.filter('formatDate', function(date) {
  const moment = require('moment');
  return moment(date, 'YYYY-MM-DD').format('DD MMM YYYY');
});

new Vue({
  render: h => h(App),
}).$mount('#app')
