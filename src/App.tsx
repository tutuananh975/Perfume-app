import { Fragment } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/layouts';
import { publicRoutes, privateRoutes } from './routes';
import { useSelector } from 'react-redux';
import "./App.css";
import NotUser from "./components/NotUser";
import { selectUser } from './pages/Customeraccount/featurnes/useSlice';
import Admin from './pages/Admin';
import NotAdmin from './pages/Admin/NotAdmin';


function App() {  
  

  // const persist = useSelector(selectUser)
  const { isLogin, isAdmin } = useSelector(selectUser);
    // 2 dòng này fake dòng trên
  // const [isAdmin, setIsAdmin] = useState(false);
  // const [isLogin, setIsLogin] = useState(false);

  return (
    <HashRouter>
      <div className='App'>
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
              return <Route key={index} path={route.path} element= {isLogin ? <Layout><Page /></Layout> : <NotUser/>}/>
            })
          }

          <Route path='/admin' element = {isAdmin? <Admin/> : <NotAdmin/>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
