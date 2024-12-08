import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header'; // Import Header
import Dashboard from './Components/Dashboard';
import CustomerManagement from './Components/CustomerManagement';
import Shipping from './Components/Shipping';
import Coupon from './Components/Coupon';
import ChangePassword from './Components/ChangePassword';
import OrderManagement from './Components/OrderManagement';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Apply a unique wrapper for the login page */}
        <Route
          exact path='/'
          element={<div className='loginPage'><Login /></div>}
        />
        <Route
          path='*'
          element={
            <div className='appContainer'>
              <Sidebar isOpen={isSidebarOpen} />
              <div className={`mainContent ${isSidebarOpen ? 'sidebarOpen' : 'sidebarCollapsed'}`}>
                <Header toggleSidebar={toggleSidebar} /> {/* Add Header for toggle */}
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/customers' element={<CustomerManagement />} />
                  <Route path='/orders' element={<OrderManagement />} />
                  <Route path='/shipping' element={<Shipping />} />
                  <Route path='/couponview' element={<Coupon />} />
                  <Route path='/changepass' element={<ChangePassword />} />
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
