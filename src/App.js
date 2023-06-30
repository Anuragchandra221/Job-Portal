import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Dashboard from './Pages/Dashboard';
import { createContext, useState } from 'react';

export const loginContext = createContext()


function App() {
  const [userAccount, setUserAccount] = useState()
  return (
    <loginContext.Provider value={[userAccount, setUserAccount]}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
