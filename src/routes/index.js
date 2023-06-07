import { createRouter, createWebHistory } from "vue-router";

import AppAbout from "../views/AppAbout.vue";
import AppHome from "../views/AppHome.vue";
const routes = [
  {
    path: "/about",
    name: "About",
    component: AppAbout,
  },
  {
    path: "/home",
    name: "Home",
    component: AppHome,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
