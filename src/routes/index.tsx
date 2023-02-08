import HomePage from "../pages/HomePage";
import BestSellers from "../pages/BestSellers";
import Brands from "../pages/Brands";
import Customeraccount from "../pages/Customeraccount";
import Fragrance from "../pages/Fragrance";
import Gift from "../pages/Gift";
import Men from "../pages/Men";
import Women from "../pages/Women";
import { FC } from "react";
import NotSideBarLayOut from "../components/layouts/NotSideBarLayOut";

const publicRoutes: {path: string, component: FC, layout?: any }[] = [
  { path: "/", component: HomePage },
  { path: "/bestSellers", component: BestSellers },
  { path: "/brands", component: Brands, layout: NotSideBarLayOut },
  { path: "/customeraccount", component: Customeraccount },
  { path: "/fragrance", component: Fragrance, layout: null },
  { path: "/gift", component: Gift },
  { path: "/men", component: Men },
  { path: "/women", component: Women },
];

const privateRoutes: [] = [];

export { publicRoutes, privateRoutes };
