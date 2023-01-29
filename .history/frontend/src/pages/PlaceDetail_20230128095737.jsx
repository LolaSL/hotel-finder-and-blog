// import React, {  useEffect, useContext} from 'react';
// import { useParams } from "react-router-dom";
// import { PlaceContext } from '../context/PlaceContext';
// import PlaceFinder from '../apis/PlaceFinder';
// import Container from 'react-bootstrap/Container';

// const PlaceDetail = (
//   { title, image_url2, description }
// ) => {
//   const { id } = useParams();

// const [place, setPlace] = useContext(PlaceContext)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await PlaceFinder.get(`/${id}`);
//         console.log(response);
//         setPlace(response.data.place);
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

//     fetchData();
//   }, [id, setPlace]);
//   return (
//     <Container className="container">
//     <div>
//       {setPlace && (
//         <>
//           <h1 className="text-center display-1">{place?.title}</h1>
//           <div className="text-center">
//             <image src={place?.image_url2} alt={place?.title}/>
//               <article>{place.description}</article>
//           </div>
//           <div className="mt-3">
           
//           </div>
       
//         </>
//       )}
//       </div>
//     </Container>
//   )
// }

// export default PlaceDetail
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const PlaceDetail = () => {
  const { placeId } = useParams();
  const place = useSelector(state =>
    state.places.find(place => place.id ===placeId)
  );

  if (!place) {
    return (
      <section>
        <h2>Place not found!</h2>
      </section>
    )
  }

    return (
    <Container className="container">
    <div>
 
        <>
          <h1 className="text-center display-1">{place.title}</h1>
          <div className="text-center">
            <image src={place?.image_url2} alt={place?.title}/>
              <article>{place.description}</article>
          </div>
          <div className="mt-3">
           
          </div>
       
        </>

      </div>
    </Container>
  )
}

export default PlaceDetail