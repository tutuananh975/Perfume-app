import { Fragment, useState, useEffect } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/layouts';
import { publicRoutes, privateRoutes } from './routes';
import { useSelector } from 'react-redux';
import "./App.css";
import { selectUser } from './pages/Customeraccount/featurnes/useSlice';
import NotAdmin from './pages/Admin/components/NotAdmin';
import HomeAdmin from './pages/Admin/HomeAdmin';
import Admin from './pages/Admin';
import UsersManager from './pages/Admin/UsersManager';
import ProductsManager from './pages/Admin/ProductsManager';
import BillsManager from './pages/Admin/BillsManager';
import { createContext } from "react";
import useFetchAxios from './hooks/UseFetchAxios';
import Loading from './components/Loading';

export const UserContext = createContext<any>({});

function App() {  
  
  const { idUser, isLogin, isAdmin } = useSelector(selectUser);
  const {responses, doFetch} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/' + idUser)
  // console.log(responses.data);
  const {data: userData, isLoading} = responses;

  useEffect(() => {
    doFetch({method: "GET"})
  }, [])


  return (
    <HashRouter>
      {isLoading && <Loading />}
      <UserContext.Provider value={userData}>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Layout: any = route.layout === undefined ? MainLayout : route.layout === null ? Fragment : route.layout ;
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            })
          }
          {
            privateRoutes.map((route, index) => {
              const Layout: any = route.layout === undefined ? MainLayout : route.layout === null ? Fragment : route.layout ;
              const Page = route.component;
              const NaviPage = route.naviComponent
              return <Route key={index} path={route.path} element= {isLogin ? <Layout><Page /></Layout> : <NaviPage/>}/>
            })
          }
          <Route path='/admin' element = {isAdmin ? <Admin /> : <NotAdmin />} >
            <Route index element={<HomeAdmin />} />
            <Route path='/admin/products-manager' element={<ProductsManager />}/>
            <Route path='/admin/users-manager' element={<UsersManager />}/>
            <Route path='/admin/bills-manager' element={<BillsManager />}/>
          </Route>
        </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
