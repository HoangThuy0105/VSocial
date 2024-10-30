import { createRouter, createWebHistory } from 'vue-router';
import ChatView from '../views/ChatView.vue';
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  // {
  //   path: '/chat/:id',
  //   name: 'ChatView',
  //   component: ChatView,
  //   props: true,
  // },
  {
    path: '/chat',              
    name: 'ChatView',
    component: ChatView,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
