import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; 
import MainContent from '../components/content/MainContent.vue';  

const routes = [
  {
    path: '/',  
    name: 'Home',
    component: Home,
  },
  {
    path: '/main',  
    name: 'MainContent',
    component: MainContent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
