import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './ReviewAddForm.css'



class ReviewAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishId: null,
      rating: null,
      comment: null,

    };
  }

  resetState = () => {
    this.setState({
      dishId: null,
      rating: null,
      comment: null,
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

    const {dishId, rating, comment} = this.state;
    const {uid, displayName, photoURL} = this.props.user;
    const url = "http://www.localhost:8080/reviews/";

    if (dishId === null || rating === "" ) return;

    const apiPayload = {

      dishId: dishId,
      userId: uid,
      userName: displayName,
      userImg: photoURL,
      rating: rating,
      comment: comment,

    };

    axios.post(url, apiPayload)
    .then((response)=>{

      this.props.addReviewCallback();
      this.resetState();

    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  }

  render() {
    const resultList = this.props.dishList.map((dish)=>{
      return (<option
        value = {dish._id}>{dish.name}</option>
       )
    });

    return (
      <section className="review-add-container">
        <form onSubmit={this.onSubmit} name="review-add-form" id="review-add-form" className="form-group">

        <div>
          <label className="review-add-form--label" htmlFor="dishId">Dish Name</label>
          <select type="text" className="form-control selcls " name="dishId"  onChange={this.onFormChange} value={this.state.dishId} >
            {resultList}
          </select>
        </div>

          <div>
            <label className="review-add-form--label" htmlFor="rating">Rating</label>
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
            <label className="review-add-form--label" htmlFor="rating">Comment</label>
            <input className="review-add-form--comment" name="comment" placeholder="comment" onChange={this.onFormChange} value={this.state.comment} />
          </div>

          <input className="btn btn-primary review-add-form--submit" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }

}

ReviewAddForm.propTypes = {

};

  // <select type="text" className="form-control selcls " name="rating"  placeholder={this.props.rating} onChange={this.onFormChange} value={this.state.rating} >
     // <textarea className="review-edit-form--comment" name="comment" placeholder={this.props.comment} onChange={this.onFormChange} value={this.state.comment}></textarea>
export default ReviewAddForm;
