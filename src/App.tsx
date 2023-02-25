import { FC, Fragment, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./components/layouts";
import { publicRoutes, privateRoutes } from "./routes";
import NotUser from "./components/NotUser";

interface Props { }

const App: FC<Props> = () => {
  // const [idUser, setIdUser] = useState(() => {
  //   return localStorage.idUser;
  // })
  // const [isLogin, setIsLogin] = useState(() => {
  //   return localStorage.idUser ? true : false
  // })

  // const login = (id: number) => {
  //   localStorage.idUser = id;
  //   setIdUser(id);
  //   setIsLogin(true)
  // };

  // const logout = () => {
  //   localStorage.removeItem('idUser');
  //   setIdUser(null);
  //   setIsLogin(false);
  // }

  // const value = {
  //   idUser,
  //   isLogin,
  //   login,
  //   logout
  // }

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout: any =
              route.layout === undefined
                ? MainLayout
                : route.layout === null
                  ? Fragment
                  : route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* {privateRoutes.map((route, index) => {
            const Layout: any =
              route.layout === undefined
                ? MainLayout
                : route.layout === null
                  ? Fragment
                  : route.layout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  isLogin ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <NotUser />
                  )
                }
              />
            );
          })} */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
