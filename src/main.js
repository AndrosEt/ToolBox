import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import Base64 from 'js-base64'
Vue.use(ElementUI);
// Vue.use(Base64)

new Vue({
  el: '#app',
  render: h => h(App)
});
Vue.config.productionTip = false
