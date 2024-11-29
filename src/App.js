import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <>
        <div className='Container'>
          <Routes>
            <Route exact path='/' element={<Login />} />
          </Routes>

        </div>
      </>

    </BrowserRouter>
  );
}

export default App;
