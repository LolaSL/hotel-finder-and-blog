import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/Home";
import HotelDetail from "./pages/HotelDetail";
import UpdateHotel from "./pages/UpdateHotel";
import NotFound from "./pages/NotFound";
import { HotelsContextProvider } from "./context/HotelsContext";
import NavBars from "./components/NavBars";
import TouristTips from "./pages/TouristTips";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { useSelector } from "react-redux";
import JourneyOfAllExperiences from "./pages/JourneyOfAllExperiences.jsx";
import Places from "./pages/Places.jsx";
import Footer from "./components/Footer.jsx";
import SlidePage from "./pages/SlidePage";
import BestTimeToVisit from "./pages/BestTimeToVisit";
import WheatherAndClimate from "./pages/WheatherAndClimate";
import ReasonToVisitIsrael from "./pages/ReasonToVisitIsrael";
import AeroportPage from "./pages/AeroportPage";
import HotelTips from "./pages/HotelTips";
import ProtectedRoute from "./components/ProtectedRoot";

const PrivateRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{isAuth ? <Outlet /> : <Navigate to="/login" />}</>;
};

const RestrictedRoutes = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return <>{!isAuth ? <Outlet /> : <Navigate to="/" />}</>;
};

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
              <Route path="/hotel-tips" element={<HotelTips />} />
              <Route path="/journey" element={<JourneyOfAllExperiences />} />
              <Route path="/places" element={<Places />} />
              <Route path="/slide" element={<SlidePage />} />
              <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
              <Route path="/wheather-climate" element={<WheatherAndClimate />} />
              <Route path="/reasons-to-visit" element={<ReasonToVisitIsrael />} />
              <Route path="/aeroport-quide" element={<AeroportPage/>} />
              <Route element={<RestrictedRoutes />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes> 
          </main>
          <Footer />
        </BrowserRouter>
      </div>
  </HotelsContextProvider>
  );
}

export default App;
