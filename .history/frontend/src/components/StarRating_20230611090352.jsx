import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ rating }) => {
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
  // return (<>{stars}</>);

  Array.from({ length: 5 }, (elem, iidex) => {
    
  })
  return( <div>Star</div>)
};

export default StarRating;
