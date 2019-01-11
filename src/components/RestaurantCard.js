import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './RestaurantCard.css';



const RestaurantCard = (props) => {
  const { id, name, photoUrl, webUrl } = props;
  return (
    <div className="card restaurant-card">

      <section className="restaurant-card--header">
      <button
        onClick={() => props.deleteRestaurantCallback(props.id)}
        type="button"
        className="close restaurant-card--close-btn"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      { speciesEmoji(species) } {id} - {name}
        <button
          onClick={() => {props.selectRestaurantCallback(props.id)}}
          className="btn btn-primary restaurant-card--select-restaurant-btn"
          >
            Select
        </button>
      </section>
      <section className="restaurant-card--body">
        { about.length > 128 ? `${about.substring(0, 128)}...` : about}
      </section>
      <section className="pet-card--footer text-muted">
        // {location}
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
