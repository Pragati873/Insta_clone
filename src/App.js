import './App.css';
import React from 'react';

import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin'; 
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Createpost from './Components/Createpost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Createpost" element={<Createpost/>} />
        </Routes>
        {/* <ToastContainer theme="dark"></ToastContainer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
