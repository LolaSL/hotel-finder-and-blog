import React from "react";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import  Container  from 'react-bootstrap/Container';

const StarRating = ({ stars}) => {
  // rating =4
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

  const rating = Array.from({ length: 5 }, ( elem, index) => {
    let number = index + 0.5;
    debugger;

    return (
      <span key={elem.name}>
      {stars >= +1 ? (
        <FaStar className="icon" />
      ) : stars >= number ? (
        <FaStarHalfAlt className="icon" />
      ) : (<AiOutlineStar className="icon" />)}
    </span>
    )
  });
  return (
    <Container >
      <div className="icon">{rating}</div>
    </Container>
  )
  
};
export default StarRating;

