import React, { Component } from 'react';
import './App.css';

import  { auth, provider } from './firebase.js';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import SearchForm from './components/SearchForm';
import ReviewList from './components/ReviewList';

import RestaurantDetail from './components/RestaurantDetail';
import Home from './components/Home';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
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
    let uid;
    let username;
    if (this.state.user != null) {
      uid = this.state.user.uid;
      username = this.state.user.displayName;
    }

    return (

      <Router>
        <div className="App">
          <header>
              <nav className="navbar navbar-expand-lg navbar-dark bg">
                <h1 className="navbar-brand">Foodie Finds</h1>

                <div className="collapse navbar-collapse" id="navbarColor01">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/search" className="nav-link">Search</Link>
                    </li>
                    {this.state.user ?
                      <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                      </li>
                      :
                      <li></li>
                      }
                  </ul>
                  {this.state.user ?
                    <div className='user-profile'>
                        <img className='user-profile-img' src={this.state.user.photoURL} alt='user'/>
                    </div>
                    :
                    <div>

                    </div>
                    }

                   <section className="log">

                      {this.state.user ?
                       <button className="btn btn-secondary my-2 my-sm-0" onClick={this.logout}>Log Out</button>
                        :
                       <button className="btn btn-secondary my-2 my-sm-0" onClick={this.login}>Log In</button>
                        }
                    </section>
                </div>
              </nav>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/search/" render={()=>
             <
              SearchForm
              uid={uid}
              username={username}
              />
            }
          />
          <Route path="/dashboard/" render={()=>
              <
                ReviewList
                user={this.state.user}
              />
            }
          />
         <Route path="/restaurant/:id" render={(props) => <RestaurantDetail user={this.state.user} {...props} />} />

        </div>
     </Router>
    );
  }
}

export default App;
