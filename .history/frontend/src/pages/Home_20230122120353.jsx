import React from 'react';
import Header from '../components/Header';
import AddHotel from '../components/AddHotel';


const Home = () => {
  return (
    <div>
            <h1 className="font-weight-light display-1 text-center">
        Hotel Finder
      </h1>
      <AddHotel />
    </div>
  )
}

export default Home;