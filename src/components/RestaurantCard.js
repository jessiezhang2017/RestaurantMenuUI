import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantCard.css';



const RestaurantCard = (props) => {
  const { id, name, photo, location, overall_rating, menuUrl } = props;


  return (
    <div className="card restaurant-card">

     <section className="restaurant-card--img">
      <img src={photo} alt="food_post"/>
     </section>

      <section className="restaurant-card--details">
        <p><strong>Restaurant Name: {name}</strong></p>
        <p>Location: {location}</p>
        <p>User rating: {overall_rating}</p>
        <a rel="noopener noreferrer" href={menuUrl} target="_blank">Menu</a>
      </section>

    </div>
  );
};

RestaurantCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  photUrl: PropTypes.string.isRequired,
  menuUrl: PropTypes.string,
  // location: PropTypes.string,
  // deletePetCallback: PropTypes.func.isRequired,
  // selectPetCallback: PropTypes.func.isRequired,
}

export default RestaurantCard;
