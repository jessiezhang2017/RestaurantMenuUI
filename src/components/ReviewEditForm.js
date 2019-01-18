import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './ReviewEditForm.css'



class ReviewEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,
      comment: "",

    };
  }

  resetState = () => {
    this.setState({
      rating: null,
      comment: "",
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
    const {  comment } = this.state;
    const {_id, dishId, userId, userName, rating} = this.props;
    const url = "http://www.localhost:8080/reviews/"

    if ( comment === "" ) return;

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

      this.props.editReviewCallback();
      this.resetState();

      // window.location.reload();
    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  }

  render() {
    return (
      <section className="edit-container">
        <form onSubmit={this.onSubmit} name="review-edit-form" id="review-edit-form" className="form-group">

          <div>
            <label className="--label" htmlFor="comment">Comment</label>
          </div>
          <div>
            <textarea className="review-edit-form--comment" name="comment" placeholder={this.props.comment} onChange={this.onFormChange} value={this.state.comment}></textarea>
          </div>
          <input className="btn btn-primary review-edit-form--submit" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }

}

ReviewEditForm.propTypes = {

};

export default ReviewEditForm;
