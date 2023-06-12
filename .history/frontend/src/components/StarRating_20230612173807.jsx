import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StarRating = ({ rating}) => {
//   // rating = 4
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="icon text-warning"> <FaStar /></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="icon text-warning"><FaStarHalfAlt /></i>);
    }
    else {
      stars.push(<i key={i} className="icon text-warning"> <FaStar/></i>);
    }
  }

  return (<div>{stars}</div>);
  
  // };

    //rating =4
    // const stars = [];
    // for (let i = 1; i <= 5; i++) {
    //   if (i <= rating) {
    //     stars.push(<i key={i} className="fas fa-star text-warning"></i>);
    //   } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
    //     stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
    //   } else {
    //     stars.push(<i key={i} className="far fa-star text-warning"></i>);
    //   }
    // }
    // return <>{stars}</>;
  };
export default StarRating;

