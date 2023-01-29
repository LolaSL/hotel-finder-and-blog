import React, {useContext} from 'react';
import PlaceList from '../components/PlaceList';
// import { PlaceContextProvider } from "../context/PlaceContext";


const JourneyOfAllExperiences = () => {
  const {place} = useContext(PlaceContextProvider)
  return (
    <div>
      <h1 className="font-weight-light display-1 text-center mb-4 mt-4">
        Journey Of All Experiences
      </h1>
      <h2 className="font-weight-light  text-center">
        Find inspiration for your next adventure, whether trekking through the
        jungle with an elephant or traversing the largest sand desert in the
        world. Let your imagination run wild.
      </h2>
      <PlaceList place={place} />
    </div>
  );
};

export default JourneyOfAllExperiences;
