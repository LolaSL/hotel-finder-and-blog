import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';
import { HotelsContextProvider } from "./context/HotelsContext";
import NavBars from './components/NavBars';
import TouristTips from './pages/TouristTips';
import Blog from './pages/Blog';
import Register from './pages/Register.jsx';
import SignIn from './pages/SignIn.jsx'


function App() {
  return (
    <HotelsContextProvider>
      <div className="app">
        <BrowserRouter>
          <NavBars />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/hotels/:id" element={<HotelDetail />} />
              <Route path="/hotels/:id/update" element={<UpdateHotel />} />
              <Route path="/tips" element={<TouristTips />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </HotelsContextProvider>
  );
}

export default App;

