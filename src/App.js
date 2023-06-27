import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
