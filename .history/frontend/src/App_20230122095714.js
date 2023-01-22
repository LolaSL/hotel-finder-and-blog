import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';
import { HotelsContextProvider } from "./context/HotelsContext";
import NavBar from './components/NavBar';

function App() {
  return (
    <HotelsContextProvider>
     <BrowserRouter>
        <div className="app">
          <NavBar />
          <div className="container">
        <Routes>   
          <Route path="/" element={<Home />} exact  />
          <Route path="/hotels/:id"  element={<HotelDetail />} />
          <Route path="/hotels/:id/update"  element={<UpdateHotel />} />
          <Route path="*"  element={<NotFound />} />
            </Routes>
          </div>
      </div>
      </BrowserRouter>
      </HotelsContextProvider>
  );
}

export default App;

