import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/product",
    name: "product",
    meta: {
      layout: "Layout",
    },
    children: [
      {
        //path:/product/detail/layer1/id  eg:localhost/product/detail/1/2
        path: "detail/:layer1/:id",
        name: "productDetail",
        component: () => import("../views/ProductDetail.vue"),
      },
      {
        path: "layer1", //路徑為/product/layer1
        name: "layer1",
        component: () => import("../views/Layer1.vue"),
      },
      {
        path: "productList/:layer1",
        name: "productList",
        component: () => import("../views/ProductList.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
