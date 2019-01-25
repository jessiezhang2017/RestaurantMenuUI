import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import DishCard from './DishCard';
import Rating from 'react-rating';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantCard.css';
// import DishAddForm from './DishAddForm';


class RestaurantCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishList: [],

    };
  }

  componentDidMount() {

    const {id} = this.props;

    // const url = 'http://www.localhost:8080/menus/restaurants/';
   const url = process.env.REACT_APP_BACKEND_URL+"menus/restaurants/";

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

    const { id, name, photo, location } = this.props;
    const dishList = this.state.dishList;
    const overallReview = dishList.filter(e => e.name === 'overall');
    const overall = overallReview.sort((a, b) => b.overallRating - a.overallRating).slice(0,3);
    const sizeO= overall.length;
    const restaurantOverall = overall.map((dish) => {

      return <DishCard key={dish.id}
               // deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...dish} />

    });



    const dishReview = dishList.filter(e => e.name !== 'overall');
    const dish1 = dishReview.sort((a, b) => b.overallRating - a.overallRating).slice(0,3);
    const size = dish1.length;
    const dishes = dish1.map((dish) => {

      return <DishCard key={dish.id}
               // deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...dish} />

    });


    return (

          <div className="restaurant-card">

                 <section className="restaurant-card--img">
                   <img src={photo} alt="food_post"/>
                 </section>

                 <section className="restaurant-card--details">

                  <h4><Link to={`/restaurant/${id}`}>{name}</Link></h4>
                  <p>Address: {location}</p>
                 {restaurantOverall}
                 {dishes}
                </section>
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
