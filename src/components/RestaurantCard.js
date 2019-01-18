import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import DishCard from './DishCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantCard.css';
import DishAddForm from './DishAddForm';


class RestaurantCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishList: [],
      dishAddition: false,
    };
  }

  componentDidMount() {

    const {id} = this.props;

    const url = 'http://www.localhost:8080/menus/restaurants/';

    axios.get(url+id)
    .then((response) =>{
      // console.log("test");
      // console.log(response.data);
      this.setState({
        dishList: response.data,

      });
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message,
      })
    })

  }

  addDish = ()=> {
    this.setState({dishAddition:!this.state.dishAddition})
    
  }


  render() {

    const { id, name, photo, location, overallRating, menuUrl } = this.props;
    const dishList = this.state.dishList.map((dish) => {

      return <DishCard key={dish.id}
               // deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...dish} />
    });


    return (

          <div className="card restaurant-card">

                 <section className="restaurant-card--img">
                   <img src={photo} alt="food_post"/>
                 </section>

                 <section className="restaurant-card--details">
                   <p><strong>Restaurant Name: {name}</strong></p>
                   <p>Location: {location}</p>
                   <p>User rating: {overallRating}</p>
                   <a rel="noopener noreferrer" href={menuUrl} target="_blank">Menu</a>
                   <p><button
                     onClick={this.addDish}
                     className="btn btn-primary restaurant-card--add-dish-btn"
                     >
                       Add a dish
                   </button></p>
                 </section>
                 {dishList}
                 {this.state.dishAddition?
                   <DishAddForm
                     addDishCallback = {this.addDish}
                     restaurantId = {this.props.id}
                     restaurantName = {this.props.name}
                   />
                   :
                   <p></p>
                 }

            </div>

    );
  }

}

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  menuUrl: PropTypes.string,
  overall_raing: PropTypes.number.isRequired,
  location: PropTypes.string,
  // deletePetCallback: PropTypes.func.isRequired,
  // selectPetCallback: PropTypes.func.isRequired,
}

export default RestaurantCard;
