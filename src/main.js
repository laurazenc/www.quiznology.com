import 'es6-promise/auto';

import Vue from 'vue';
import VueRouter from 'vue-router';
import Icon from 'vue-awesome';
import VueResource from 'vue-resource';
import App from './App';
import store from './stores';
import router from './router';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.component('icon', Icon);

Vue.http.interceptors.push((request, next) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    request.headers = request.headers || {};
    request.headers.Authorization = `Bearer ${token}`;
  }
  next();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, Icon },
});
