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
      <div className='appContainer'>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route
            path='*'
            element={
              <>
                <Sidebar />
                <div className='mainContent'>
                  <Routes>
                    <Route path='/dashboard' element={<Dashboard/>} />
                    <Route path='/customers' element={<CustomerManagement/>} />
                    <Route path='/shipping' element={<Shipping/>} />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
