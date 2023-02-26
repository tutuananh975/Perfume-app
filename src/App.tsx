import { Fragment } from 'react';
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

function App() {  
  

  // const persist = useSelector(selectUser)
  const { isLogin, isAdmin } = useSelector(selectUser);
    // 2 dòng này fake dòng trên
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <HashRouter>
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
              return <Route key={index} path={route.path} element= {isLogin ? <Layout><Page /></Layout> : <route.naviComponent/>}/>
            })
          }

          <Route path='/admin' element = {isAdmin ? <Admin /> : <NotAdmin />} >
            <Route index element={<HomeAdmin />} />
            <Route path='/admin/products-manager' element={<ProductsManager />}/>
            <Route path='/admin/users-manager' element={<UsersManager />}/>
            <Route path='/admin/bills-Mmanager' element={<BillsManager />}/>
          </Route>
        </Routes>
    </HashRouter>
  );
};

export default App;
