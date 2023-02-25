import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, HashRouter, redirect, Navigate } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/layouts';
import { publicRoutes } from './routes';
import ProductDetail from './pages/ProductDetail';
import Help from './pages/Help';
import { useSelector } from 'react-redux';

function App() {  


  const PrivateRoutes = () => {
    return  localStorage.getItem("accessToken") ? <Help/> : <Navigate to='/' />
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
  );
}

export default App;
