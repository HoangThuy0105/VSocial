import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatView from "../views/ChatView.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import ForgotPage from "../views/auth/ForgotPage.vue";
import ProfileView from "../views/ProfileView.vue";
// import PostShare from "../components/post/PostShare.vue";

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
    path: "/login",
    name: "login",
    component: LoginPage,
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
  // {
  //   path: "/postshare",
  //   name: "postshare",
  //   component: PostShare,
  // },
   
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
