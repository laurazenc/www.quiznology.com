import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/views/Landing';
import About from '@/views/About';
import Login from '@/views/Login';

Vue.use(Router);

const router = new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      beforeEnter: guardRoute,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/auth/callback',
      component: {
        template: '<div class="auth-component"></div>',
      },
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

function guardRoute(to, from, next) {
  const auth = router.app.$options.store.getters.isAuthenticated;
  if (!auth) next({ path: '/login' });
  else next();
}

export default router;
