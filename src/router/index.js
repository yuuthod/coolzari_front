import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'home' */ '../views/Home.vue'),
  },
  {
    path: '/review',
    name: 'review',
    component: () =>
      import(/* webpackChunkName: 'review' */ '../views/Review.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '../views/Login.vue'),
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: () =>
      import(/* webpackChunkName: 'mypage' */ '../views/Mypage.vue'),
  },
  {
    path: '/mypage/myinfo',
    name: 'myinfo',
    component: () =>
      import(/* webpackChunkName: 'myinfo' */ '../components/MyPageEdit.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
