import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import './DishCard.css';


class DishCard extends Component {

  constructor(props) {
    super(props);

    this.state = {

      reviewList:[],
      viewReview: false,

    };
    this.changeReview = this.changeReview.bind(this);
  }

  componentDidMount() {

    const {_id} = this.props;

    // const url = 'http://localhost:8080/menus/';
    const url2 = 'http://localhost:8080/reviews/dishes/';

    // axios.get(url+id)
    // .then((response) =>{
    //
    //   this.setState({
    //     dish: response.data,
    //
    //   });
    // })
    // .catch((error) => {
    //   console.log(error.message);
    //   this.setState({
    //     errorMessage: error.message,
    //   })
    // });

    axios.get(url2+_id)
    .then((response) =>{
      console.log(response.data);
      this.setState({
        reviewList: response.data,

      });
    })
    .catch((error) => {
      console.log(error.message);
      this.setState({
        errorMessage: error.message,
      })
    });

  }

  changeReview = () => {
    this.setState({viewReview:!this.state.viewReview});

  }


  render() {

    const { name, overallRating} = this.props;

    const {reviewList, viewReview }= this.state;

    var avg = parseFloat(overallRating).toFixed(1);

    var size = null;

    if(reviewList) {
      size = reviewList.length;
    }

    const reviews = reviewList.map((review) => {
      return (
        <ul>
         <li><strong>{review.userName} :</strong></li>
          <li>rating: {review.rating}</li>
          <li>comment: {review.comment}</li>
        </ul>
      )
    });


    return (
      <div className="dish-card">

          <section className="dish-card--details">
           { size?
            <div>{name} : {avg}
              { viewReview?
                <button className = "badge badge-secondary" onClick ={this.changeReview}>collapse</button>
                :
                <button className = "badge badge-secondary" onClick ={this.changeReview}>expand</button>
              }
            </div>
            :
            <div></div>
           }
           { viewReview?
             <div>
               {reviews}
             </div>
             :
             <div></div>
           }

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
