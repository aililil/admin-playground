import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/Login/index.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/components/Home/index.vue"),
    children:[

    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
