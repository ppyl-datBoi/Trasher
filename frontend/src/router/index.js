import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreateApp from '../views/CreateApp.vue'
import AllApps from '../views/AllApps.vue';
import Users from '../views/Users.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Домашняя страница',
    component: Home,
  },
  {
    path: '/create',
    name: 'Создание заявки',
    component: CreateApp,
  },
  {
    path: '/all-apps',
    name: 'Все заявки',
    component: AllApps,
  },
  {
    path: '/users',
    name: 'Пользователи',
    component: Users,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
