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

    };
  }

  componentDidMount() {

    const {id} = this.props;

    const url = 'http://www.localhost:8080/menus/restaurants/';

    axios.get(url+id)
    .then((response) =>{

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


  render() {

    const { id, name, photo, location, overallRating, menuUrl } = this.props;

    const dish1 = this.state.dishList.sort((a, b) => b.overallRating - a.overallRating).slice(0,3);
    const dishList = dish1.map((dish) => {

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

                  <Link to={`/restaurant/${id}`}><button className="btn btn -info">view restaurant details</button></Link>
                 </section>
                 <h6>Top Rating Dishes</h6>
                 <p><span>Dish Name : Rating </span></p>
                 {dishList}

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
