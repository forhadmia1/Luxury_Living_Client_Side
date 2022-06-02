import './App.css';
import Home from './pages/Home/Home';
import MouseParticles from 'react-mouse-particles'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <MouseParticles g={1} num={6} color="random" cull="stats,image-wrapper" level={6} />
    </div>
  );
}

export default App;
