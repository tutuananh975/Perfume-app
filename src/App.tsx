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
import ProductsManager from './pages/Admin/ProductsManager/ProductsManager';
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
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    if(idUser) {
      doFetch({method: "GET"})
    }
  }, [idUser, doFetch])

  useEffect(() => {
    if(userData) {
      const getTotalItems = userData.cart.reduce((total: number, product: any) => {
        return total + product.amount;
      }, 0)
      setTotalItems(getTotalItems);
      setCart(userData.cart)
    }
  }, [userData])

  const handleSetCart = () => {

  }


  // const handleSetTotalItems = useCallback((newTotalItems: number) => {
  //   setTotalItems(newTotalItems);
  // }, [])

  const handleSetTotalItems = (newTotalItems : number) => {
    console.log(newTotalItems)
    setTotalItems(newTotalItems);
  }
  const value = {
    cart,
    handleSetCart,
    totalItems, 
    handleSetTotalItems
  }


  return (
    <HashRouter>
      {isLoading && <Loading />}
      <UserContext.Provider value={value}>
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
