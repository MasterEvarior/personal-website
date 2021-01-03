import Vue from 'vue'
import App from './App.vue'
import shell from 'vue-shell'

Vue.config.productionTip = false
Vue.use(shell)

new Vue({
  render: h => h(App),
}).$mount('#app')
