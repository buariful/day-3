import './App.css';
import Home from './Pages/Home/Home';
import Booking from './Pages/Booking/Booking';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Login/Register';
import Login from './Pages/Login/Login';
import Header from './Shared/Header';
import RequireAuh from './RequireAuth/RequireAuh';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/booking" element={<RequireAuh>
          <Booking></Booking>
        </RequireAuh>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
