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
      // <div className="review-card">
      //
      //   <section className="review-card--header">
      //
      //   </section>
      //
      //   <section className="review-card--body">
      //     <h3>Restaurant Name: {restaurantName}</h3>
      //     <p><strong>Dish Name:</strong> {dishName}</p>
      //     <p><strong>Dish Rating:</strong> {rating}</p>
      //     <p><strong>Comment:</strong> {comment}</p>
      //     <p>
      //       <button
      //         // onClick={() => {props.editReviewCallback(_id)}}
      //         onClick={this.editRating}
      //         className="btn btn-secondary review-card--edit-review-btn"
      //         >
      //           Edit
      //       </button>
      //     </p>
      //
      //     <p>
      //       <button
      //         onClick={() => {this.props.deleteReviewCallback(_id)}}
      //         className="btn btn-secondary review-card--delete-review-btn"
      //       >
      //         Delete
      //       </button>
      //     </p>
      //
      //       {this.state.ratingEdit?
      //         <RatingEditForm
      //           editRatingCallback = {this.editRating}
      //           {...this.props}
      //         />
      //         :
      //         <p></p>
      //       }
      //
      //
      //   </section>
      //
      // </div>
      <div className="review-card">

        <section className="review-card--header">

        </section>

        <section className="review-card--body">
          <h5>Restaurant Name: {restaurantName}</h5>
          <div className="review-card--items">
            <p>Item Name: {dishName}</p>
            <p>Item Rating: {rating}</p>
            <p>Comment:{comment}</p>
          </div>
            <button
              // onClick={() => {props.editReviewCallback(_id)}}
              onClick={this.editRating}
              className="btn btn-secondary review-card--edit-review-btn"
              >
                Edit
            </button>


            <button
              onClick={() => {this.props.deleteReviewCallback(_id)}}
              className="btn btn-secondary review-card--delete-review-btn"
            >
              Delete
            </button>

            <p>
            <p></p>
            {this.state.ratingEdit?
              <RatingEditForm
                editRatingCallback = {this.editRating}
                {...this.props}
              />
              :
              <div></div>
            }
            </p>
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
