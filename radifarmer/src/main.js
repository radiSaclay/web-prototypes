// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// Mint UI
import 'assets/css/ratchet.min.css'
// import './vendor/ratchet.js'

import store from './store'
import router from './lib/router'

// Vue resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.http.interceptors.push((request, next) => {
  let token = store.state.apiToken
  if (token != null) request.headers.set('Authorization', token)
  next(res => console.log(res))
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  ...App
}).$mount('#app')
