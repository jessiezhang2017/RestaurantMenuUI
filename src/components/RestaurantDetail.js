import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import DishCard from './DishCard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantDetail.css';
import DishAddForm from './DishAddForm';
import ReviewAddForm from './ReviewAddForm';
import Rating from 'react-rating';

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
      // overallAddition:false,
      user: this.props.user,
    };
  }

  componentDidMount() {
    console.log("ttttt");
    console.log(this.props);
    const {id} = this.props.match.params;

    // const url = 'http://www.localhost:8080/menus/restaurants/';
    const url2 = 'http://www.localhost:8080/restaurants/';

    axios.get(url2+id)
    .then((response) =>{
      const { id, name, thumb} = response.data;
      this.setState({
        restaurantId: id,
        restaurantName: name,
        menuUrl: response.data.menu_url,
        photo: thumb,
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

    this.getDishList();
    // axios.get(url+id)
    // .then((response) =>{
    //
    //   this.setState({
    //     dishList: response.data,
    //   });
    // })
    // .catch((error) => {
    //   console.log(error.message);
    //   this.setState({
    //     errorMessage: error.message,
    //   })
    // });

 }

 getDishList = () => {
   const {id} = this.props.match.params;
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
   });
 }

  addDish = ()=> {
    this.setState({dishAddition:!this.state.dishAddition});
    this.getDishList();
  }

  addReview =() => {

    this.setState({reviewAddition:!this.state.reviewAddition})
  }

  addOverall =() => {

      const {restaurantId, restaurantName} = this.state;
      const url = "http://www.localhost:8080/menus/";

      const apiPayload = {
        name: "overall",
        restaurantId: restaurantId,
        restaurantName: restaurantName,

      };

      axios.post(url, apiPayload)
      .then((response)=>{
        this.setState({overallAddition:true})
      })
      .catch((error)=>{
        this.setState({
          errorMessage:`Failure ${error.message}`,
        })
      });
    window.location.reload();

  }


  render() {

    const dishTotal = this.state.dishList;
    const overallReview = dishTotal.filter(e => e.name === 'overall').map((dish)=>{
      return <DishCard key={dish._id}
             // deleteReviewCallback={this.deleteReview}
             // editReviewCallback={this.editReview}
             // currentReviewOrNot={this.state.currentReview === review}
             {...dish} />
    });

    const dishReview = dishTotal.filter(e => e.name !== 'overall');

      const dish1 = dishReview.sort((a, b) => b.overallRating - a.overallRating);
      const dishList = dish1.map((dish) => {
        return <DishCard key={dish._id}
               // deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...dish} />
    });

      const check = this.state.dishList.map(dish => dish.name).includes("overall");

    return (

          <div className="restaurant-detail">

                 <section className="restaurant-detail--img">
                   <img src={this.state.photo} alt="food_post"/>
                 </section>

                 <section className="restaurant-detail--details">
                   <h3>{this.state.restaurantName}</h3>
                   <p>Address: {this.state.location}</p>
                    <p>
                     <a rel="noopener noreferrer" href={this.state.menuUrl} target="_blank">Menu</a>
                    </p>
                 </section>

                   {overallReview}
                   {dishList}

                 {this.props.user?
                   <div class="buttons">
                     <p><button
                       onClick={this.addDish}
                       className="btn btn-secondary restaurant-detail--add-dish-btn"
                       >Add a dish</button></p>

                     {this.state.dishAddition?
                       <DishAddForm
                         addDishCallback = {this.addDish}
                         restaurantId = {this.state.restaurantId}
                         restaurantName = {this.state.restaurantName}
                       />
                       :
                       <p></p>
                      }
                      <p><button
                        onClick={this.addReview}

                        className="btn btn-secondary restaurant-detail--add-review-btn"
                        >Add a review </button></p>
                     {!check?
                      <p><button
                          onClick={this.addOverall}

                          className="btn btn-secondary restaurant-detail--add-review-btn"
                          >overall review?</button></p>:<p></p>
                      }
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
                   <p class="text-danger"> Please log in to write reviews </p>
                 }


          </div>
    );
  }

}

RestaurantDetail.propTypes = {
  id: PropTypes.number.isRequired,
  user: PropTypes.object,
}

export default RestaurantDetail;
