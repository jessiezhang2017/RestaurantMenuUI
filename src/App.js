import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase, { auth, provider } from './firebase.js';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from './components/SearchForm';
import ReviewList from './components/ReviewList';
import RestaurantCard from './components/RestaurantCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurantName: '',
      dishName:'',
      comment:'',
      username: '',
      user: null,
      cuisine:'',
      restaurantSearchResult: []

    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(e);
    console.log(this.state);
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const url = 'http://localhost:8080/restaurants/cuisine/';

    const encoded = encodeURIComponent(this.state.cuisine);
    console.log("try"+encoded);
    console.log(url+encoded);

    axios.get(url+encoded)
     .then((response)=>{
       console.log("jessie");
       console.log(response.data);
       this.setState({
         restaurantSearchResult: response.data,
         cuisine:"",
       });
     })
     .catch((error)=>{
       this.setState({
         errorMessage: error.message,
       });
     });

  }

  logout() {
    auth.signOut()
   .then(() => {
     this.setState({
       user: null
     });
   });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        console.log(user.uid)
        this.setState({
          user
        });
      });
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
    });
  }


  render() {


    const resultList = this.state.restaurantSearchResult.map((restaurant)=>{

    return <RestaurantCard
      key = {restaurant.id}
      id = {restaurant.id}
      name = {restaurant.name}
      photo = {restaurant.thumb}
      location = {restaurant.location.address}
      overall_rating = {restaurant.user_rating.aggregate_rating}
      menuUrl = {restaurant.menu_url}
      // addLibraryCallback={()=>this.addToLibrary(movie)}
      // addLibraryCallback={this.addLibraryCallback}
    />
  });

    return (

      <Router>
        <div className="App">
          <header>
              <div className='wrapper'>
                <h1>Lucky Gate</h1>

                {this.state.user ?
                 <button onClick={this.logout}>Log Out</button>
                  :
                 <button onClick={this.login}>Log In</button>
                  }
              </div>
          </header>
          <div>
          <div className='container'>
            <section className='search-list'>
              <h6> Search for restaurants</h6>
              <form className="form-group" onSubmit={this.handleSubmit}>
                <p>
                  <select type="text" className="form-control selcls" name="cuisine" value={this.state.cuisine} onChange={this.handleChange} >
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
              </form>
            </section>
           </div>
          </div>
          <section className="search_result">
            {resultList}
          </section>
          <div >
            {this.state.user ?
              <div>
               <div className='user-profile'>
                  <p>{this.state.user.uid}</p>
                  <img src={this.state.user.photoURL} />
               </div>
               <div className='container'>
                 <section className='add-item'>
                   <form onSubmit={this.handleSubmit}>
                     <input type="text" name="username" placeholder="What's your name?" value={this.state.user.displayName || this.state.user.email} />
                     <input type="text" name="restaurantName" placeholder="Restaurant Name?" onChange={this.handleChange} value={this.state.restaurantName} />
                     <input type="text" name="dishName" placeholder="Dish Name?" onChange={this.handleChange} value={this.state.dishName} />
                     <input type="text" name="comment" placeholder="Your comment?" onChange={this.handleChange} value={this.state.comment} />
                     <button>Add Review</button>
                   </form>
                 </section>
               </div>
              </div>
              :
              <div className='wrapper'>
                <p>You must be logged in to write reviews.</p>
              </div>
              }
          </div>
        </div>
     </Router>
    );
  }
}

export default App;
