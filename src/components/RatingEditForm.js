import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './RatingEditForm.css'



class RatingEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: null,


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
    const { rating } = this.state;
    const {_id, dishId, userId, userName, comment} = this.props;
    const url = "http://www.localhost:8080/reviews/"

    if (rating === null || rating === "") return;

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

  render() {
    return (
      <section className="rating-edit-container">
        <form onSubmit={this.onSubmit} name="rating-edit-form" id="rating-edit-form" className="form-group">
          <div>
            <label className="rating-edit-form--label" htmlFor="rating">Rating</label>
            <select type="text" className="form-control selcls " name="rating"  placeholder={this.props.rating} onChange={this.onFormChange} value={this.state.rating} >
              <option value="">null</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>

          <input className="btn btn-primary rating-edit-form--submit" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }

}

RatingEditForm.propTypes = {

};

export default RatingEditForm;
