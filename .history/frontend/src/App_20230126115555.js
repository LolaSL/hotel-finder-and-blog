import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import HotelDetail from './pages/HotelDetail';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';
import { HotelsContextProvider } from "./context/HotelsContext";
import NavBars from './components/NavBars';
import TouristTips from './pages/TouristTips';
import Blog from './pages/Blog';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { useSelector } from 'react-redux';
// import UpdateUser from './pages/UpdateUser';


const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{isAuth ? <Outlet /> : <Navigate to='/login' />}</>
}

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth)

  return <>{!isAuth ? <Outlet /> : <Navigate to='/' />}</>
}

function App() {
  return (
    <HotelsContextProvider>
      <div className="app">
        <BrowserRouter>
          <NavBars />
          <div className="container">
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
                <Route path="/hotels/:id/update" element={<UpdateHotel />} />
                <Route path="/protected" element={<UpdateUser />} />
              </Route>
              <Route path="/tips" element={<TouristTips />} />
              <Route path="/blog" element={<Blog />} />
              <Route element={<RestrictedRoutes />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </HotelsContextProvider>
  );
}

export default App;

