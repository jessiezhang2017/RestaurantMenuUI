import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';



const ReviewCard = (props) => {
  const { _id, dishName, rating, comment } = props;


  return (
    <div className="card review-card">

      <section className="review-card--header">

      </section>

      <section className="review-card--body">
        <p>Dish Name: {dishName}</p>
        <p>Rating: {rating}</p>
        <p>Comment: {comment}</p>
        <p>
          <button
            onClick={() => {props.deleteReviewCallback(_id)}}
            className="btn btn-primary review-card--delete-review-btn"
          >
            Delete
          </button>
        </p>
        <p>
          <button
            onClick={() => {props.editReviewCallback(_id)}}
            className="btn btn-primary review-card--edit-review-btn"
            >
              Edit
          </button>
        </p>
      </section>
      <section className="review-card--footer text-muted">
        { }
      </section>
    </div>
  );
};

ReviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  dishId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  deleteReviewCallback: PropTypes.func.isRequired,
  eidtReviewCallback: PropTypes.func.isRequired,
}

export default ReviewCard;
