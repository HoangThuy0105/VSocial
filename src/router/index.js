import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatView from "../views/ChatView.vue";
import AccountView from "../views/AccountView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatView,
  },
  { 
    path: "/account", 
     name: "Account", 
     component: AccountView, 
    },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
