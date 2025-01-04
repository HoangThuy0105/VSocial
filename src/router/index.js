import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatView from "../views/ChatView.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPage from "../views/auth/ForgotPage.vue";
import ProfileView from "../views/ProfileView.vue";
import CallView from "@/views/CallView.vue";
import FriendView from "@/views/FriendView.vue";
import FriendAll from "@/components/friends/FriendAll.vue";
import SearchResultView from "@/views/SearchResultView.vue";
//import store from "@/store"; // Import Vuex store

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/chat",
    name: "Chat",
    component: ChatView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPage,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/call",
    name: "call",
    component: CallView,
  },
  {
    path: "/friend",
    name: "friend",
    component: FriendView,
  },
  {
    path: "/allfriend",
    name: "allfriend",
    component: FriendAll,
  },
  {
    path: "/search-results",
    name: "search-results",
    component: SearchResultView,
  },
  // {
  //   path: "/admin",
  //   name: "AdminHome",
  //   component: () => import("../views/admin/AdminHome.vue"),
  //   meta: { requiresAdmin: true }, // Route dành cho Admin
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token && to.name !== 'login' && to.name !== 'register') {
    next({ name: 'login' });
  } else {
    next();
  }
});
export default router;
