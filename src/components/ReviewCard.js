// import React from 'react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.css';
import RatingEditForm from './RatingEditForm';


class ReviewCard extends Component{

  constructor(props) {
    super(props);

    this.state = {

      ratingEdit:false,
    };
  }


  editRating = ()=> {
    this.setState({ratingEdit:!this.state.ratingEdit})
  }

 render() {
    const { _id, dishName, rating, comment, restaurantName} = this.props;

    return (
      <div className="card review-card">

        <section className="review-card--header">

        </section>

        <section className="review-card--body">
          <p>Restaurant Name: {restaurantName}</p>
          <p>Dish Name: {dishName}</p>
          <p>Dish Rating: {rating}</p>
          <p>Comment: {comment}</p>
          <p>
            <button
              // onClick={() => {props.editReviewCallback(_id)}}
              onClick={this.editRating}
              className="btn btn-primary review-card--edit-review-btn"
              >
                Edit
            </button>
          </p>

          <p>
            <button
              onClick={() => {this.props.deleteReviewCallback(_id)}}
              className="btn btn-primary review-card--delete-review-btn"
            >
              Delete
            </button>
          </p>

            {this.state.ratingEdit?
              <RatingEditForm
                editRatingCallback = {this.editRating}
                {...this.props}
              />
              :
              <p></p>
            }


        </section>

      </div>
    );
  };
}
ReviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  dishId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  deleteReviewCallback: PropTypes.func.isRequired,
  eidtReviewCallback: PropTypes.func.isRequired,
}

export default ReviewCard;
