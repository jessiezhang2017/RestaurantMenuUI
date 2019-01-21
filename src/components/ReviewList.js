import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReviewCard from './ReviewCard';
import axios from 'axios';
import './ReviewList.css';


const URL = 'http://www.localhost:8080/reviews/users/';
const URL2 = 'http://www.localhost:8080/reviews/';


class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: props.user,
      reviewList: [],
      masterList:[],
      // currentReview: undefined,

    }
    this.deleteReview = this.deleteReview.bind(this);
    // this.editReview = this.editReview.bind(this);
  }

  componentDidMount(){

    if (this.props.user) {
      const encoded = encodeURIComponent(this.props.user.uid);

      axios.get(URL+encoded)
      .then((response) =>{

        this.setState({
          reviewList: response.data,
          masterList: response.data
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { user } = this.props;
    const prevUser = prevProps.user;
    if (prevUser !== user ) {

      this.setState({ user:this.props.user });
      if (user) {
        const encoded = encodeURIComponent(user.uid);

        axios.get(URL+encoded)
        .then((response) =>{

          this.setState({
            reviewList: response.data,
            masterList: response.data
          });
        })
        .catch((error) => {
          console.log(error.message);
          this.setState({
            errorMessage: error.message,
          })
        })
      }else{
        this.setState({ reviewList:[]});
      }
    }
  }

  // editReview = (reviewId) => {
  //   let editIndex = -1;
  //   const reviews =[...this.state.masterList];
  //
  //   reviews.forEach((review, index) => {
  //     if (reviewId === review.id) {
  //       editIndex = index;
  //     }
  //   });
  //
  //   const editReview = reviews[editIndex];
  //
  //   this.setState({
  //     currentReview: editReview,
  //   })
  //
  // }



  deleteReview = (reviewId) => {
    let deleteIndex = -1;
    const reviews =[...this.state.masterList];

    reviews.forEach((review, index) => {
      if (reviewId === review.id) {
        deleteIndex = index;
      }
    });

    reviews.splice(deleteIndex, 1);

    this.setState({
      reviewList: reviews,
    })



    axios.delete(URL2+reviewId)

    .then((response)=>{
      
    })
    .catch((error)=>{
      this.setState({
        errorMessage: error.message,
      });
    });

  }



  render() {
    const reviewList = this.state.reviewList.map((review) => {

      return <ReviewCard key={review.id}
               deleteReviewCallback={this.deleteReview}
               // editReviewCallback={this.editReview}
               // currentReviewOrNot={this.state.currentReview === review}
               {...review} />
    });

    return (
      <div className="reviewlist">
        <h3 className="review-title">Reviews</h3>
        {reviewList}
      </div>
    );
  }
}


ReviewList.propTypes = {
  user: PropTypes.object.isRequired,

};

export default ReviewList;
