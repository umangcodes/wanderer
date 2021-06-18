import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import Test from "@/views/Test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
