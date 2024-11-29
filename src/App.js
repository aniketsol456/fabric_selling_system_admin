import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <>
        <div className='Container'>
          <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/sidebar' element={<Sidebar/>} />
          </Routes>

        </div>
      </>

    </BrowserRouter>
  );
}

export default App;
