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
import JourneyOfAllExperiences from './pages/JourneyOfAllExperiences'
import Places from './pages/Places';


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
      <div className="app d-flex flex-column site-container">
        <BrowserRouter>
          <NavBars />
            <main className="container">
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route exact path="/" element={<Home />} />
                <Route path="/hotels/:id" element={<HotelDetail />} />
                <Route path="/hotels/:id/update" element={<UpdateHotel />} />
              </Route>
              <Route path="/tips" element={<TouristTips />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/journey" element={<JourneyOfAllExperiences />} />
              <Route path="/places" element={<Places />} />
              <Route element={<RestrictedRoutes />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <footer className="text-center">
         <div className="fw-bold pb-4 pt-4 mt-4 border bg-primary text-white" > &copy; {new Date().getFullYear()} Copyright: Hotels Finder</div>
        </footer>
        </BrowserRouter>
      </div>
    </HotelsContextProvider>
  );
}

export default App;

