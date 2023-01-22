import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';
import { HotelsContextProvider } from "./context/HotelsContext";


function App() {
  return (
    <HotelsContextProvider
     <BrowserRouter>
     <div className="app">
        <Routes>
          <Route path="/" element={<Home />} exact  />
          <Route path="/hotels/:id"  element={<HotelDetail />} />
          <Route path="/hotels/:id/update"  element={<UpdateHotel />} />
          <Route path="*"  element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

