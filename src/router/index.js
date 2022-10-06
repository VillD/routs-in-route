import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    /*{
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () => import("../views/BrazilView.vue"),
    },
    {
      path: "/hawai",
      name: "hawai",
      component: () => import("../views/HawaiView.vue"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () => import("../views/JamaicaView.vue"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () => import("../views/PanamaView.vue"),
    },*/
    {
      path: "/destination/:id/:slug",
      name: "destination.show",
      component: () => import("../views/DestinationShow.vue"),
      props:route =>({...route.params,id: parseInt(route.params.id)}),
      children:[
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: ()=> import("../views/ExperienceShow.vue"),
          props:route =>({...route.params, id: parseInt(route.params.id)}),
        },
      ]
    },
  ],
  // linkActiveClass: "vue-school-active-link",
});

export default router;
