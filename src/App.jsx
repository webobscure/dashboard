import './App.css';
import { Routes, Route } from 'react-router-dom';
import {Account, Diagram, Home, Logout, Promo, Service, Shops, Wallet} from './pages'
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/account" element={<Account />}/>
        <Route path="/shops" element={<Shops />}/>
        <Route path="/promos" element={<Promo />}/>
        <Route path="/statistic" element={<Diagram />}/>
        <Route path="/balance" element={<Wallet />}/>
        <Route path="/service" element={<Service />}/>
        <Route path="/logout" element={<Logout />}/>
        </Route>
      </Routes> 
    </>
  );
}

export default App;
