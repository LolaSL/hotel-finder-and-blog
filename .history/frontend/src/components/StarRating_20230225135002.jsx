import React from "react";
 
const StarRating = (props) => {
  const { rating} = props;
//  const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (i <= rating) {
//       stars.push(<i key={i} className="fas fa-star"></i>);
//     } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
//       stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
//     } else {
//       stars.push(<i key={i} className="far fa-star"></i>);
//     }
//   }
//   return <>{stars}</>;
return (
  <div className="rating">
    <span>
      <i
        className={
          rating >= 1
            ? 'fas fa-star'
            : rating >= 0.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span>
      <i
        className={
          rating >= 2
            ? 'fas fa-star'
            : rating >= 1.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span>
      <i
        className={
          rating >= 3
            ? 'fas fa-star'
            : rating >= 2.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span>
      <i
        className={
          rating >= 4
            ? 'fas fa-star'
            : rating >= 3.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    <span>
      <i
        className={
          rating >= 5
            ? 'fas fa-star'
            : rating >= 4.5
            ? 'fas fa-star-half-alt'
            : 'far fa-star'
        }
      />
    </span>
    {caption ? (
      <span>{caption}</span>
    ) : (
      <span>{' ' + numReviews + ' reviews'}</span>
    )}
  </div>
);
}

export default StarRating;

