import Vue from 'vue';
import VueAuthenticate from 'vue-authenticate';
import config from './../../config/config';
import providers from './../../config/provider.config';

const env = (process.env.NODE_ENV === 'development') ? 'dev' : 'build';

Vue.use(VueAuthenticate, {
  baseUrl: config[env].apiUrl,
  providers,
});

export default {
  state: {
    userInfo: null,
    isAuthenticated: !!localStorage.getItem('token'),
  },
  mutations: {
    login: (state, data) => { state.userInfo = data; },
    logout: (state) => { state.userInfo = null; },
    authenticate: (state) => { state.isAuthenticated = !!localStorage.getItem('token'); },
  },
  actions: {
    authenticate: ({ commit }) => {
      commit('authenticate');
    },
    logout: ({ commit }) => {
      window.localStorage.removeItem('token');
      commit('authenticate');
      commit('logout');
    },
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    userInfo: state => state.userInfo,
  },
};
