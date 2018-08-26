import Vue from 'vue'
import App from './App.vue'
import VTooltip from 'v-tooltip'
 
Vue.use(VTooltip)

// import "@/scss/_globals.scss";


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

