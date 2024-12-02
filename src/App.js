import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import CustomerManagement from './Components/CustomerManagement';
import Shipping from './Components/Shipping';
import Coupon from './Components/Coupon';
import ChangePassword from './Components/ChangePassword';

function App() {
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
              <Sidebar />
              <div className='mainContent'>
                <Routes>
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/customers' element={<CustomerManagement />} />
                  <Route path='/shipping' element={<Shipping />} />
                  <Route path='/couponview' element={<Coupon/>} />
                  <Route path='/changepass' element={<ChangePassword/>} />
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
