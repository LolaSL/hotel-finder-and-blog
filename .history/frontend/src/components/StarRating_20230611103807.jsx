import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StarRating = ({ rating}) => {
  rating =4
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<i key={i} className="icon text-warning" > <FaStar /></i>);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<i key={i} className="fas fa-star-half-alt text-warning"><FaStarHalfAlt /></i>);
    } else {
      stars.push(<i key={i} className="fas fa-star text-warning"> <FaStar  /></i>);
    }
  }
  return (<>{stars}</>);

  // const rating = Array.from({ length: 5 }, ( index) => {
  //   let number = index + 0.5;

  //   debugger;

  //   return (
  //     <span key={index}>
  //     {stars >= index + 1 ? (
  //       <FaStar className="icon" />
  //     ) : stars >= number ? (
  //       <FaStarHalfAlt className="icon" />
  //     ) : (<AiOutlineStar className="icon" />)}
  //   </span>
  //   )
  // });
  // return (
  //   <Container >
  //     <div className="icon" elem="star">{rating}</div>
  //   </Container>
  // )
  
};
export default StarRating;

