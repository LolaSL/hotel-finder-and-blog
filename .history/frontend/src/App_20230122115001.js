import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';
import { HotelsContextProvider } from "./context/HotelsContext";
import NavBars from './components/NavBars';
import TouristTips from './TouristTips'
import Blog from './pages/Blog';

function App() {
  return (
    <HotelsContextProvider> 
       <div className="app">
     <BrowserRouter>
          <NavBars />
          <div className="container">
        <Routes>   
          <Route path="/" element={<Home />} exact  />
          <Route path="/hotels/:id"  element={<HotelDetail />} />
              <Route path="/hotels/:id/update" element={<UpdateHotel />} />
              <Route path="/tips" element={<TouristTips />} />
              <Route path="/blog"  element={<Blog />} />
          <Route path="*"  element={<NotFound />} />
            </Routes>
          </div>
    
      </BrowserRouter>  
      </div>
      </HotelsContextProvider>
  );
}

export default App;

