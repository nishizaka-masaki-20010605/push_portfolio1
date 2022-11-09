import * as vueRouter from "vue-router";
import Login from "../components/pages/Login.vue";
import SignUp from "../components/pages/SignUp.vue";
import Chat from "../components/pages/Chat.vue";
import Upload from "../components/chat/Upload.vue";

const routes = [
  {
    path: "/",
    component: Chat,
  },
  {
    path: "/signup",
    component: SignUp,
  },
  {
    path: "/login", 
    component: Login, 
  },
  {
    path:"/Upload",
    component : Upload,
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes,
});

export default router;