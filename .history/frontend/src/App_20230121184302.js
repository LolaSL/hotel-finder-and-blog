import React from 'react';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import HotelDetails from './pages/HotelDetails';
import UpdateHotel from './pages/UpdateHotel';
import NotFound from './pages/NotFound';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },

//   {
//     path: "/hotels/:id",
//     element: <HotelDetails />,
//   },
//   {
//     path: "/hotels/:id/update",
//     element: <UpdateHotel />,
//   },
//   {
//     path: "/not_found",
//     element: <NotFound />,
//     }
   
// ]);


function App() {
  return (
     <BrowserRouter>
     <div className="app">
     {/* <RouterProvider router={router} >app */}
   
        <Routes>
          <Route path="/" component={<Home />}exact  />
          <Route path="/hotels/:id"  component={<HotelDetails />} />
          <Route path="/hotels/:id/update"  component={<UpdateHotel />} />
          <Route path="*"  component={<NotFound />} />
        </Routes>
{/* </RouterProvider> */}
       </div>  </BrowserRouter>
  );
}

export default App;

