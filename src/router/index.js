import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'main' },
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'auth' },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'main' },
    component: () => import('../views/Categories.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'auth' },
    component: () => import('../views/Register.vue'),
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('../views/Record.vue'),
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main' },
    component: () => import('../views/Record.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main' },
    component: () => import('../views/Profile.vue'),
  },
  {
    path: '/planning',
    name: 'planning',
    meta: { layout: 'main' },
    component: () => import('../views/Planning.vue'),
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main' },
    component: () => import('../views/History.vue'),
  },
  {
    path: '/details',
    name: 'details',
    meta: { layout: 'main' },
    component: () => import('../views/DetailRecorded.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
