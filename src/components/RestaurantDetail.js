import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import DishCard from './DishCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantDetail.css';
import DishAddForm from './DishAddForm';
import ReviewAddForm from './ReviewAddForm';

class RestaurantDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      restaurantId:null,
      restaurantName:null,
      menuUrl:null,
      photo:null,
      overallRating:null,
      location:null,
      dishList: [],
      dishAddition: false,
      reviewAddition:false,
      user: this.props.user,
    };
  }

  componentDidMount() {

    const {id} = this.props.match.params;

    const url = 'http://www.localhost:8080/menus/restaurants/';
    const url2 = 'http://www.localhost:8080/restaurants/';

    axios.get(url2+id)
    .then((response) =>{
      const { id, name, photo} = response.data;
      this.setState({
        restaurantId: id,
        restaurantName: name,
        menuUrl: response.data.menu_url,
        photo: response.data.thumb,
        overallRating: response.data.user_rating.aggregate_rating,
        location: response.data.location.address,

      });

    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message,
      })
    });



    axios.get(url+id)
    .then((response) =>{
      console.log("testjj");
      console.log(response.data);
      this.setState({
        dishList: response.data,

      });
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message,
      })
    });

  }

  addDish = ()=> {
    this.setState({dishAddition:!this.state.dishAddition})


  }

  addReview =() => {
    this.setState({reviewAddition:!this.state.reviewAddition})
  }


  render() {

    // const dishList = this.state.dishList.map((dish) => {

      const dish1 = this.state.dishList.sort((a, b) => b.overallRating - a.overallRating);
      const dishList = dish1.map((dish) => {
      return <DishCard key={dish._id}
               // deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...dish} />
    });


    return (

          <div className="card restaurant-card">

                 <section className="restaurant-card--img">
                   <img src={this.state.photo} alt="food_post"/>
                 </section>

                 <section className="restaurant-card--details">
                   <p><strong>Restaurant Name: {this.state.restaurantName}</strong></p>
                   <p>Location: {this.state.location}</p>
                   <p>User rating: {this.state.overallRating}</p>
                   <a rel="noopener noreferrer" href={this.state.menuUrl} target="_blank">Menu</a>

                 </section>
                   <p><strong>Dish List : rating</strong></p>
                   {dishList}

                 {this.props.user?
                   <div>
                     <p><button
                       onClick={this.addDish}
                       className="btn btn-primary restaurant-card--add-dish-btn"
                       >Add a dish</button></p>

                     {this.state.dishAddition?
                       <DishAddForm
                         addDishCallback = {this.addDish}
                         restaurantId = {this.state.id}
                         restaurantName = {this.state.name}
                       />
                       :
                       <p></p>
                      }
                      <p><button
                        onClick={this.
                          addReview}
                        className="btn btn-primary dish-card--add-dish-btn"
                        >Add a review</button></p>

                        {this.state.reviewAddition?
                          <ReviewAddForm
                            addReviewCallback = {this.addReview}
                            user = {this.props.user}
                            dishList = {this.state.dishList}
                          />
                          :
                          <p></p>
                         }
                   </div>
                   :
                   <p> Please log in to write reviews </p>
                 }


          </div>
    );
  }

}

RestaurantDetail.propTypes = {
  id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // photo: PropTypes.string.isRequired,
  // menuUrl: PropTypes.string,
  // overall_raing: PropTypes.number.isRequired,
  // location: PropTypes.string,
  // deletePetCallback: PropTypes.func.isRequired,
  // selectPetCallback: PropTypes.func.isRequired,
}

export default RestaurantDetail;
