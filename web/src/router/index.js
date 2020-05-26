import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
    children: [
      {
        path: "/",
        name: "user",
        component: () => import(/* webpackChunkName: "user" */ "../views/User.vue")
      },
      {
        path: "/position",
        name: "position",
        component: () => import(/* webpackChunkName: "position" */ "../views/Position.vue")
      },
      {
        path: "/company",
        name: "company",
        component: () => import(/* webpackChunkName: "company" */ "../views/Company.vue")
      },
      {
        path: "/message",
        name: "message",
        component: () => import(/* webpackChunkName: "message" */ "../views/Message.vue")
      }
    ]
  },
  {
    path: "/register",
    name: "register",
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "register" */ "../views/Signup.vue")
  },
  {
    path: "/login",
    name: "login",
    meta: {
      public: true
    },
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/resume",
    name: "resume",
    component: () => import(/* webpackChunkName: "resume" */ "../views/Resume.vue")
  },
  {
    path: "/info",
    name: "info",
    component: () => import(/* webpackChunkName: "info" */ "../views/Info.vue")
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import(/* webpackChunkName: "setting" */ "../views/Setting.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.public && !localStorage.token) {
    return next("/login");
  }
  next();
});

export default router;
