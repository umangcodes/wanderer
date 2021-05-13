import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About.vue";
import WeatherApp from "@/views/WeatherApp.vue";
import ToDoApp from "@/views/ToDoApp.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/WeatherApp",
    name: "WeatherApp",
    component: WeatherApp,
  },
  {
    path: "/ToDoApp",
    name: "ToDo",
    component: ToDoApp,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
