import HomePage from "../pages/HomePage";
import BestSellers from "../pages/BestSellers";
import Brands from "../pages/Brands";
import Customeraccount from "../pages/Customeraccount";
import Fragrance from "../pages/Fragrance";
import Gift from "../pages/Gift";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Help from "../pages/Help";
import Cart from "../pages/Cart";
import { Component, FC } from "react";
import NotSideBarLayOut from "../components/layouts/NotSideBarLayOut";
import Payment from "../pages/Payment";
import ProductDetail from "../pages/ProductDetail";


const publicRoutes: {path: string, component: FC, layout?: any, children?: any, element?:any}[] = [
  { path: "/", component: HomePage, layout: NotSideBarLayOut},
  { path: "/best-sellers", component: BestSellers },
  { path: "/brands", component: Brands, layout: NotSideBarLayOut },
  { path: "/customeraccount", component: Customeraccount, layout: null },
  { path: "/fragrance", component: Fragrance, layout: null },
  { path: "/gift", component: Gift},
  { path: "/men", component: Men, children: ProductDetail},
<<<<<<< HEA
  { path: "/women", component: Women, children: ProductDetail},
  { path: "/help", component:Help, layout: NotSideBarLayOut },
  { path: "/cart", component: Cart, layout: NotSideBarLayOut },
=======
  { path: "/women", component: Women, children: ProductDetail },
  { path: "/help", component: Help, layout: NotSideBarLayOut },
  // { path: "/cart", component: Cart, layout: NotSideBarLayOut },
>>>>>>> 7dc99872739c0ddc38c16689caa2d5452f0baed1
  { path: "/payment", component: Payment, layout: null },
  { path: "productdetail", component: ProductDetail, layout: NotSideBarLayOut},
];

<<<<<<< HEAD

const privateRoutes: [] = [];
=======
const privateRoutes: {path: string, component: FC, layout?: any}[] = [
  {path: "/cart", component: Cart, layout: NotSideBarLayOut}
];
>>>>>>> 7dc99872739c0ddc38c16689caa2d5452f0baed1

export { publicRoutes, privateRoutes };
