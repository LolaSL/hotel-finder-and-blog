import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';



function App() {
  return (
     <BrowserRouter>
     <div className="app">
        <Routes>
          <Route path="/" component={<Home />}exact  />
          <Route path="/hotels/:id"  component={<HotelDetail />} />
          <Route path="/hotels/:id/update"  component={<UpdateHotel />} />
          <Route path="*"  component={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

