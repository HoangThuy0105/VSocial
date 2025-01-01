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

// Navigation Guard để kiểm tra quyền truy cập
// router.beforeEach((to, from, next) => {
//   const isAuthenticated = store.state.auth.token; // Kiểm tra người dùng đã đăng nhập chưa
//   const userRole = store.state.auth.role; // Lấy vai trò người dùng
//   const publicPages = ["/", "/login"]; // Các route không yêu cầu đăng nhập
//   const authRequired = !publicPages.includes(to.path); // Kiểm tra nếu route yêu cầu đăng nhập

//   if (authRequired && !isAuthenticated) {
//     return next("/"); // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
//   }

//   if (to.meta.requiresAdmin && userRole !== "Admin") {
//     return next("/home"); // Chuyển hướng về trang chính nếu không phải Admin
//   }

//   next(); // Tiếp tục với route nếu không có vấn đề gì
// });

export default router;
