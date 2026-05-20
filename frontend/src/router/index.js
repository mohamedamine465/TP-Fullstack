import { createRouter, createWebHistory } from "vue-router";

import LoginView from "../views/auth/LoginView.vue";
import RegisterView from "../views/auth/RegisterView.vue";

import AdminDashboard from "../views/admin/AdminDashboard.vue";
import StudentDashboard from "../views/student/StudentDashboard.vue";

const routes = [
  {
    path: "/",
    component: LoginView,
  },

  {
    path: "/register",
    component: RegisterView,
  },

  {
    path: "/admin",
    component: AdminDashboard,
  },

  {
    path: "/student",
    component: StudentDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;