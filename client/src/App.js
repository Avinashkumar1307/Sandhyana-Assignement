import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import DashBoard from './Components/DashBoard';
function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
