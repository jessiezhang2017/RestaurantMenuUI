import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import firebase, { auth, provider } from './firebase.js';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from './components/SearchForm';
import ReviewList from './components/ReviewList';
import RestaurantCard from './components/RestaurantCard';
import Home from './components/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {
      // restaurantName: '',
      // dishName:'',
      // comment:'',
      // username: '',
      user: null,
      // cuisine:'',
      // restaurantSearchResult: []

    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  // handleChange (e){
  //
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  //   console.log(e);
  //   console.log(this.state);
  // }
  //
  // handleSubmit (event) {
  //   event.preventDefault();
  //
  //   const url = 'http://localhost:8080/restaurants/cuisine/';
  //
  //   const encoded = encodeURIComponent(this.state.cuisine);
  //   console.log("try"+encoded);
  //   console.log(url+encoded);
  //
  //   axios.get(url+encoded)
  //    .then((response)=>{
  //      console.log("jessie");
  //      console.log(response.data);
  //      this.setState({
  //        restaurantSearchResult: response.data,
  //        cuisine:"",
  //      });
  //    })
  //    .catch((error)=>{
  //      this.setState({
  //        errorMessage: error.message,
  //      });
  //    });
  //
  // }

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

    // const resultList = this.state.restaurantSearchResult.map((restaurant)=>{
    //
    // return <RestaurantCard
    //   key = {restaurant.id}
    //   id = {restaurant.id}
    //   name = {restaurant.name}
    //   photo = {restaurant.thumb}
    //   location = {restaurant.location.address}
    //   overall_rating = {restaurant.user_rating.aggregate_rating}
    //   menuUrl = {restaurant.menu_url}
      // addLibraryCallback={()=>this.addToLibrary(movie)}
      // addLibraryCallback={this.addLibraryCallback}
  //   />
  // });

    return (

      <Router>
        <div className="App">
          <header>
              <div className='wrapper'>
                <h1>Lucky Gate</h1>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/search">Search</Link>
                  </li>
                  {this.state.user ?
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    :
                    <li></li>
                    }
                </ul>

                {this.state.user ?
                 <button onClick={this.logout}>Log Out</button>
                  :
                 <button onClick={this.login}>Log In</button>
                  }
              </div>
          </header>
          <div >
            {this.state.user ?
              <div className='user-profile'>
                  <img src={this.state.user.photoURL} alt='user'/>
              </div>
              :
              <div>
                <p></p>
              </div>
              }
          </div>

          <Route path="/" exact component={Home} />

          <Route path="/search/" render={()=>
             <
              SearchForm
              user={this.state.user}
              // userUid={this.state.user? this.state.user.uid:''}
              // cuisine={this.state.cuisine}
              // searchResults={this.state.restaurantSeachResult}
              // handleChangeCallback={this.handleChange}
              // handleSubmitCallback={this.handleSubmit}
              />
            }
          />
          <Route path="/dashboard/" render={()=>
            <
             ReviewList
             // customers={this.state.customers}
             // selectCustomerCallback={this.selectCustomer}
            />
           }
          />
        </div>
     </Router>
    );
  }
}

export default App;
