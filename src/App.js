import './App.css';
import Home from './pages/Home/Home';
import MouseParticles from 'react-mouse-particles'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Booking from './pages/Dashboard/Booking';
import BookingList from './pages/Dashboard/BookingList';
import Review from './pages/Dashboard/Review';
import OrderList from './pages/Dashboard/OrderList';
import AddService from './pages/Dashboard/AddService';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import ManageService from './pages/Dashboard/ManageService';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='booking' element={<Booking />} />
          <Route path='bookingList' element={<BookingList />} />
          <Route path='review' element={<Review />} />
          <Route path='order' element={<OrderList />} />
          <Route path='addService' element={<AddService />} />
          <Route path='makeAdmin' element={<MakeAdmin />} />
          <Route path='manageService' element={<ManageService />} />
        </Route>
      </Routes>
      <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
    </div>
  );
}

export default App;
