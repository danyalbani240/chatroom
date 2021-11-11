import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config";
//auth
const requiredLogin = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) {
    next({ name: "Welcome" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/chat",
    name: "chat",
    component: Chatroom,
    beforeEnter: requiredLogin,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
