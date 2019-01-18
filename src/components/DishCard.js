import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './DishCard.css';


class DishCard extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dish: null,
      
    };
  }

  componentDidMount() {

    const {id} = this.props;

    const url = 'http://www.localhost:8080/menus/';

    axios.get(url+id)
    .then((response) =>{

      this.setState({
        dish: response.data,

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

    const { id, name, restaurantId, restaurantName } = this.props;


    return (
      <div className="card dish-card">

          <section className="dish-card--details">
            <p><strong>Dish Name: {name}</strong></p>
            <p><button
              onClick={this.addReview}
              className="btn btn-primary dish-card--add-dish-btn"
              >
                Add a review
            </button></p>

          </section>


      </div>
     );
   }
};

DishCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,

  // deletePetCallback: PropTypes.func.isRequired,
  // selectPetCallback: PropTypes.func.isRequired,
}

export default DishCard;
