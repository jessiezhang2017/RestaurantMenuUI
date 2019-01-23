import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './DishAddForm.css'



class DishAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishName: null,

    };
  }

  resetState = () => {
    this.setState({
      dishName: null,

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
    event.preventDefault();


    const {dishName} = this.state;
    const {restaurantId, restaurantName} = this.props;
    const url = "http://www.localhost:8080/menus/";

    if (dishName === null || dishName === "") return;

    const apiPayload = {

      name: dishName,
      restaurantId: restaurantId,
      restaurantName: restaurantName,

    };

    axios.post(url, apiPayload)
    .then((response)=>{

      this.props.addDishCallback();
      this.resetState();


    })
    .catch((error)=>{
      this.setState({
        errorMessage:`Failure ${error.message}`,
      })
    });
  }

  render() {
    return (
      <section className="dish-add-container">
        <form onSubmit={this.onSubmit} name="dish-add-form" id="dish-add-form" className="form-group">

          <div>
            <label className="dish-add-form--label" htmlFor="dishName">Dish Name</label>
            <input className="form-control dish-add-form--dishName" name="dishName" placeholder="dish name" onChange={this.onFormChange} value={this.state.dishName} />
          </div>

          <input className="btn btn-secondary dish-add-form--submit" type="submit" name="submit" value="Submit" />
        </form>
      </section>
    );
  }

}

DishAddForm.propTypes = {
   restaurantId:PropTypes.string.isRequired,
   restaurantName:PropTypes.string.isRequired,
   addDishCallback:PropTypes.func.isRequired,
};

  // <select type="text" className="form-control selcls " name="rating"  placeholder={this.props.rating} onChange={this.onFormChange} value={this.state.rating} >
     // <textarea className="review-edit-form--comment" name="comment" placeholder={this.props.comment} onChange={this.onFormChange} value={this.state.comment}></textarea>
export default DishAddForm;
