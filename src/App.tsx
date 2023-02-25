
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter, redirect, Navigate } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/layouts';
import { publicRoutes } from './routes';
import ProductDetail from './pages/ProductDetail';
import Help from './pages/Help';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import "./App.css";
import NotUser from "./components/NotUser";

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

function App() {  
  


  const PrivateRoutes = () => {
    return localStorage.getItem("accessToken") ? <Help/> : <Navigate to='/' />
  }

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
          <Route path="/help" element={<PrivateRoutes/>} />
        </Routes>
      </div>
    </HashRouter>
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
  );
};

export default App;
