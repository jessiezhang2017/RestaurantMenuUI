import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';



const ReviewCard = (props) => {
  const { id, dishName, rating, comment } = props;
  console.log(props);
  return (
    <div className="card review-card">

    <section className="review-card--body">
      <h3>{ dishName}</h3>
      <p>{rating}</p>
      <p>{comment}</p>
    </section>
    <section className="review-card--footer text-muted">
      { }
    </section>

      <section className="review-card--header">
        <button
          onClick={() => props.deleteReviewCallback(props.id)}
          type="button"
          className="btn btn-primary revie2-card--edit-review-btn"

        >
          Delete
        </button>
        <button
          onClick={() => {props.editReviewCallback(props.id)}}
          className="btn btn-primary revie2-card--edit-review-btn"
          >
            Edit
        </button>
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
