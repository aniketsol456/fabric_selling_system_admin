import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

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
