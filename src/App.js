import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import CustomerManagement from './Components/CustomerManagement';
import Shipping from './Components/Shipping';

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
