import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './RatingEditForm.css'



class RatingEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: this.props.rating,
      comment: this.props.comment,

    };
  }

  resetState = () => {
    this.setState({
      rating: null,

    });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
  }

  onSubmit = (event) => {
    // event.preventDefault();
    const { rating ,comment} = this.state;
    const {_id, dishId, userId, userName} = this.props;
    const url = process.env.REACT_APP_BACKEND_URL + "reviews/"

    if (rating === this.props.rating && comment === this.props.comment) return;

    const apiPayload = {
      _id: _id,
      dishId: dishId,
      userId: userId,
      userName: userName,
      rating: rating,
      comment: comment,
    };

    axios.put(url + _id, apiPayload)
    .then((response)=>{

      this.props.editRatingCallback();
      this.resetState();

      // window.location.reload();
    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  }

  // <div class="form-group">
  //      <label for="exampleTextarea">Example textarea</label>
  //      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
  //    </div>


  render() {
    return (
      <section className="rating-edit-container">
        <form onSubmit={this.onSubmit} name="rating-edit-form" id="rating-edit-form" className="form-group">
          <div>
            <label className="rating-edit-form--label" htmlFor="rating">Rating</label>

            <select type="text" className="form-control selcls " name="rating"  onChange={this.onFormChange} value={this.state.rating} >

              <option value="">null</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <div>
            <label className="label" htmlFor="comment">Comment</label>
          </div>
          <div>
            <textarea className="form-control" rows="3" name="comment"  onChange={this.onFormChange} value={this.state.comment}></textarea>
          </div>

          <input className="btn btn-secondary rating-edit-form--submit" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }

}

RatingEditForm.propTypes = {
  id: PropTypes.string.isRequired,
  dishId: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
  deleteReviewCallback: PropTypes.func.isRequired,
  eidtReviewCallback: PropTypes.func.isRequired,
  editRatingCallback: PropTypes.func.isRequired,
};

  // <select type="text" className="form-control selcls " name="rating"  placeholder={this.props.rating} onChange={this.onFormChange} value={this.state.rating} >
     // <textarea className="review-edit-form--comment" name="comment" placeholder={this.props.comment} onChange={this.onFormChange} value={this.state.comment}></textarea>
export default RatingEditForm;
