import React from "react";
import StarRating from "./StarRating";
// import HotelFinder from "../apis/HotelFinder";


const Reviews = ({ reviews }) => {
  const deleteReview = ({id}) => reviews
  // const [ setReviews] = useState();
  // const handleDelete = async (e, id) => {
  //   e.stopPropagation();
  //   try {
  //     const response = await HotelFinder.delete(`/${id}/removeReview`);
  //     setReviews(
  //      reviews.pop((review) => {
  //         return review.id !== id;
  //       })
  //     );
  //     console.log(response.data.review);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // function removeReview() {
  //   fetch(HotelFinder + "/" + id, {
  //     method: 'DELETE'
  //   }).then(() => {

  //     console.log('removed');
  //   }).catch(err => {
  //     console.error(err)
  //   });
  // }
  return (
<div>
    <div className="row row-cols-3 mb-2 d-flex p-4 ">
      {reviews.map((review) => {
        return (
          <div
            key={ review.id}
            className="card-review text-white shadow mb-3 mr-2 me-2 rounded p-2"
            style={{ maxWidth: "30%" }}
          >
            <div className="card-header  d-flex justify-content-between">
              <span> {review.name}</span>
              <span>
                <StarRating rating={ review.rating} />
              </span>
            </div>
            <div className="card-body">
              <p className="card-text"> {review.review}</p>
            </div>
      
          </div>
        );
      })}
      </div>
 {/* <button type="submit" className="btn" size="sm"
             onClick={(e) => handleDelete(e, reviews.id)}
      >Delete Review</button> */}
    </div>
  );
};

export default Reviews;