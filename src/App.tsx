import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './components/layouts';
import NotSideBarLayOut from './components/layouts/NotSideBarLayOut'
import HomePage from './pages/HomePage';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Layout: any = route.layout === undefined ? MainLayout : route.layout === null ? Fragment : route.layout ;
              const Page = route.component
              return <Route key={index} path={route.path} element={<Layout><Page/></Layout>} />
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
