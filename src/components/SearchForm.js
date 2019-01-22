import React, { Component } from 'react';
import './SearchForm.css';
import axios from 'axios';
import PropTypes from 'prop-types';
// import {BrowserRouter as Router, Route, Link } from "react-router-dom";

// import ReviewList from './components/ReviewList';
import RestaurantCard from './RestaurantCard';


class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      cuisine:'',
      restaurantSearchResult: [],
      count: 0,

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getPrevious = this.getPrevious.bind(this);
  }

  handleChange = (e)=>{

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();


    const url = 'http://localhost:8080/restaurants/cuisine/';

    const encoded = encodeURIComponent(this.state.cuisine);

    var count = this.state.count;

    axios.get(url+encoded+'/'+count)
     .then((response)=>{

       this.setState({
         restaurantSearchResult: response.data,
         // cuisine:"",

       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }

  getNext = (event)=> {
    event.preventDefault();
    const url = 'http://localhost:8080/restaurants/cuisine/';

    const encoded = encodeURIComponent(this.state.cuisine);

    var count = this.state.count+20;


    axios.get(url+encoded+'/'+count)
     .then((response)=>{

       this.setState({
         restaurantSearchResult: response.data,
         // cuisine:"",
         count:count,

       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }


  getNext = (event)=> {
    event.preventDefault();
    const url = 'http://localhost:8080/restaurants/cuisine/';

    const encoded = encodeURIComponent(this.state.cuisine);

    var count = this.state.count+20;


    axios.get(url+encoded+'/'+count)
     .then((response)=>{

       this.setState({
         restaurantSearchResult: response.data,
         // cuisine:"",
         count:count,

       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }

  getPrevious = (event)=> {
    var count = parseInt(this.state.count) - 20;
    if (count<0){
      count = 0;
    };
    this.setState({count:count});

  }


  render() {

    const resultList = this.state.restaurantSearchResult.map((restaurant)=>{


    return <RestaurantCard
      key = {restaurant.id}
      id = {restaurant.id}
      name = {restaurant.name}
      photo = {restaurant.thumb}
      location = {restaurant.location.address}
      overallRating = {restaurant.user_rating.aggregate_rating}
      menuUrl = {restaurant.menu_url}
      user = {this.props.user}
      // addLibraryCallback={()=>this.addToLibrary(movie)}
      // addLibraryCallback={this.addLibraryCallback}
    />
  });

    return (
      <div className='search'>
        <section className='container'>
          <form className="form-group" onSubmit={this.handleSubmit}>
            <p>
              <select type="text" className="form-control selcls" name="cuisine" value={this.cuisine} onChange={this.handleChange} >
                <option value="">Select cuisine</option>
                <option value="152">Africa</option>
                <option value="1">America</option>
                <option value="3">Asian</option>
                <option value="151">Argentine</option>
                <option value="131">Australian</option>
                <option value="193">BBQ</option>
                <option value="5">Bar Food</option>
                <option value="30">cafe</option>
                <option value="25">Chinese</option>
                <option value="38">European</option>
                <option value="45">Franch</option>
                <option value="134">German</option>
                <option value="156">Greek</option>
                <option value="181">Grill</option>
                <option value="148">Indian</option>
                <option value="55">Italian</option>
                <option value="60">Japanese</option>
                <option value="67">Korean</option>
                <option value="59">Malaysian</option>
                <option value="70">Mediterranean</option>
                <option value="73">Mexican</option>
                <option value="963">Pacific Northwest</option>
                <option value="82">Pizza</option>
                <option value="983">Pub Food</option>
                <option value="320">Ramen</option>
                <option value="998">Salad</option>
                <option value="304">Sandwich</option>
                <option value="83">Seafood</option>
                <option value="128">Sichuan</option>
                <option value="267">South African</option>
                <option value="966">Southwestern</option>
                <option value="89">Spanish</option>
                <option value="141">Steak</option>
                <option value="177">Sushi</option>
                <option value="997">Taco</option>
                <option value="190">Taiwanese</option>
                <option value="964">Teriyaki</option>
                <option value="95">Thai</option>
                <option value="99">Vietnamese</option>
                <option value="308">Vegetarian</option>
              </select>
            </p>
            <input type="submit" value="search" className="btn btn-success"/>
            <button className="btn btn -info" onClick={this.getPrevious}>previous</button>
            <button className="btn btn -info" onClick={this.getNext}>next</button>
          </form>
      </section>

      <section className="search_result">
        {resultList}
      </section>

    </div>
  );
  }
}

SearchForm.propTypes = {
  uid: PropTypes.string,
  username: PropTypes.string,

}
export default SearchForm;
