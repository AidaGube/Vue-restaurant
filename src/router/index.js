import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Stock from "../views/Stock.vue";
import Cart from "../views/Cart.vue";
import ProductDetail from "../views/ProductDetail.vue";
import PayForm from "../views/PayForm.vue";
import Delivery from "../views/Delivery.vue";
import Admin from "../views/Admin/Admin.vue";
import AdminAddProduct from "../views/Admin/AdminAddProduct.vue";
import AdminAddPromotion from "../views/Admin/AdminAddPromotion.vue";
import AdminEdit from "../views/Admin/AdminEdit.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stock",
    name: "Stock",
    component: Stock,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
  {
    path: "/product/:id",
    name: "Deatail",
    component: ProductDetail,
  },
  {
    path: "/cart/pay",
    name: "Pay",
    component: PayForm,
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery,
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/add/product",
    name: "AdminAdd",
    component: AdminAddProduct,
  },
  {
    path: "/admin/add/stock",
    name: "AdminAddPromotion",
    component: AdminAddPromotion,
  },
  {
    path: "/admin/edit",
    name: "AdminEdit",
    component: AdminEdit,
  },
  {
    path: "/admin/edit/:id",
    name: "sdf",
    component: {},
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
