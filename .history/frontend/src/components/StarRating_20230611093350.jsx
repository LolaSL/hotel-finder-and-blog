import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const StarRating = ({ stars}) => {
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

  const rating = Array.from({ length: 5 }, ( index) => {
    let number = index + 0.5;
    number = 0.5;

    return (<span key={index}>
      {stars >= +1 ? (
        <FaStar className="icon" />
      ) : stars >= number ? (
        <FaStarHalfAlt className="icon" />
      ) : (<AiOutlineStar className="icon" />)}</span>
    )
  });
  return (
  
      <div className="icon">{rating }</div>

  )
  
};
export default StarRating;
